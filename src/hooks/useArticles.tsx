import React, { useEffect, useState, useContext } from "react"

import { DataDetailsContext } from "contexts/DataDetailsContext"
import countryApi from "api/countryApi"

import { Article } from "types/Article"
import { ArticleDetailsType } from "types/ArticleDetailsType"

const useArticles = (country?: string) => {
    const [countryArticles, setCountryArticles] = useState<Article[]>()
    const [articleDetails, setArticleDetails] = useState<ArticleDetailsType>();
    const [fetchStatus, setFetchStatus] = useState({loading: false, error: false});
    const { setItemNumber } = useContext(DataDetailsContext)

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setFetchStatus({loading: true, error: false})
                if(country) {
                    const countryNewsData = await countryApi.getCountryNews(country)
                    setCountryArticles(countryNewsData.articles)
                    setItemNumber(countryNewsData.articles.length)
                }
                setFetchStatus({loading: false, error: false})
            } catch(err) {
                setFetchStatus({loading: false, error: true})
            }
        }
        fetchNews()
    }, [country])

    return ({
        countryArticles,
        articleDetails,
        fetchStatus,
        setArticleDetails,
    })
}

export default useArticles;