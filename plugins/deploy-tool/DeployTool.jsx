import { useCallback, useEffect, useRef, useState } from 'react'
import { Badge, Button, Card, Flex, Stack, Text } from '@sanity/ui'
import { RocketIcon } from '@sanity/icons/Rocket'

const WORKFLOW_API = 'https://api.github.com/repos/glencoden/happa-website/actions/workflows/deploy-live.yml'

const POLL_INTERVAL = 5000

const MAX_TRIGGER_POLL_CYCLES = 12

const githubHeaders = {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${import.meta.env.SANITY_STUDIO_GITHUB_TOKEN}`,
}

const getRunLabel = (run) => {
    if (run === null) {
        return { text: 'No deploys yet', tone: 'default' }
    }
    if (run.status !== 'completed') {
        return { text: 'Deploying…', tone: 'caution' }
    }
    if (run.conclusion === 'success') {
        return { text: 'Live', tone: 'positive' }
    }
    return { text: 'Failed', tone: 'critical' }
}

export function DeployTool() {
    const [latestRun, setLatestRun] = useState(null)
    const [isTriggering, setIsTriggering] = useState(false)
    const [error, setError] = useState(null)

    const preDispatchRunIdRef = useRef(undefined)
    const triggerPollCountRef = useRef(0)

    const fetchLatestRun = useCallback(async () => {
        try {
            const response = await fetch(`${WORKFLOW_API}/runs?per_page=1`, { headers: githubHeaders })
            if (!response.ok) {
                throw new Error(`GitHub responded with status ${response.status}`)
            }
            const data = await response.json()
            const run = data.workflow_runs[0] ?? null
            setLatestRun(run)
            setError(null)
            if (preDispatchRunIdRef.current !== undefined) {
                triggerPollCountRef.current += 1
                const runId = run !== null ? run.id : null
                const hasNewRun = runId !== preDispatchRunIdRef.current
                const hitPollCap = triggerPollCountRef.current >= MAX_TRIGGER_POLL_CYCLES
                if (hasNewRun || hitPollCap) {
                    preDispatchRunIdRef.current = undefined
                    setIsTriggering(false)
                }
            }
        } catch (requestError) {
            setError(requestError.message)
        }
    }, [])

    useEffect(() => {
        fetchLatestRun()
    }, [fetchLatestRun])

    const isRunning = isTriggering || (latestRun !== null && latestRun.status !== 'completed')

    useEffect(() => {
        if (!isRunning) {
            return undefined
        }
        const intervalId = setInterval(fetchLatestRun, POLL_INTERVAL)
        return () => clearInterval(intervalId)
    }, [isRunning, fetchLatestRun])

    const deploy = useCallback(async () => {
        setIsTriggering(true)
        setError(null)
        preDispatchRunIdRef.current = latestRun !== null ? latestRun.id : null
        triggerPollCountRef.current = 0
        try {
            const response = await fetch(`${WORKFLOW_API}/dispatches`, {
                method: 'POST',
                headers: { ...githubHeaders, 'Content-Type': 'application/json' },
                body: JSON.stringify({ ref: 'main' }),
            })
            if (response.status !== 204) {
                throw new Error(`GitHub responded with status ${response.status}`)
            }
        } catch (requestError) {
            setError(requestError.message)
            setIsTriggering(false)
            preDispatchRunIdRef.current = undefined
        }
    }, [latestRun])

    const label = getRunLabel(latestRun)

    return (
        <Card padding={4}>
            <Stack space={4}>
                <Text size={2} weight="semibold">Website deployment</Text>

                <Text size={1} muted>
                    Publishes the current CMS content to happa-berlin.com. Publish your
                    document changes first, then press deploy. A deploy takes a few minutes.
                </Text>

                <Flex align="center" gap={3}>
                    <Button
                        icon={RocketIcon}
                        text={isRunning ? 'Deploying…' : 'Deploy website'}
                        tone="primary"
                        disabled={isRunning}
                        onClick={deploy}
                    />

                    <Badge tone={label.tone}>{label.text}</Badge>

                    {latestRun !== null && (
                        <Text size={1} muted>
                            Last deploy: {new Date(latestRun.created_at).toLocaleString()}
                        </Text>
                    )}
                </Flex>

                {error !== null && (
                    <Card padding={3} tone="critical" radius={2}>
                        <Text size={1}>{error}</Text>
                    </Card>
                )}
            </Stack>
        </Card>
    )
}
