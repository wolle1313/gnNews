import React, { useEffect, useState, useContext } from "react"

import { DataDetailsContext } from "contexts/DataDetailsContext"
import sourcesApi from "api/sourcesApi"

import { Source } from "types/Source"

const useSources = () => {
    const [sources, setSources] = useState<Source[]>()
    const [fetchStatus, setFetchStatus] = useState({loading: false, error: false})
    const { setItemNumber } = useContext(DataDetailsContext)
    useEffect(() => {
        const fetchSources = async () => {
            try {
                setFetchStatus({loading: true, error: false})
                const sourcesData = await sourcesApi.getSources()
                setSources(sourcesData.sources)
                setItemNumber(sourcesData.sources.length)
                setFetchStatus({loading: false, error: false})
            } catch(err) {
                setFetchStatus({loading: false, error: true})
            }
        }
        fetchSources()
    }, [])

    return ({
        sources,
        fetchStatus,
    })
}

export default useSources;