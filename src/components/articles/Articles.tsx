import React, { useCallback, useState } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import { LayoutTypes } from 'redux/NewsLayoutSlice';
import useArticles from 'hooks/useArticles';

import Modal from '@mui/material/Modal';

import { ArticleItem } from './ArticleItem';
import { ArticleDetails } from './ArticleDetails';
import { NoData } from 'components/NoData';
import { ErrorPage } from 'components/common/ErrorPage';
import { LoadingPage } from 'components/LoadingPage';

interface StyledWrapperProps {
  order: LayoutTypes
}

export const Articles: React.FC = () => {
  const { country } = useParams();
  const { order } = useSelector((state: RootState) => state.newsLayout);
  const { t } = useTranslation()
  const { countryArticles, articleDetails, fetchStatus, setArticleDetails } = useArticles(country)
  const [open, setOpen] = useState(false);

  const articles = useCallback(() => 
    countryArticles?.map(article => 
    <ArticleItem 
      key={article.title} 
      setArticleDetails={setArticleDetails}
      setOpen={setOpen} 
      article={article} 
      order={order} />),
      [countryArticles, order])

    if(fetchStatus.error) return <ErrorPage errorMessage={t('error.newsFetchFailed')}/>

    if(fetchStatus.loading) return <LoadingPage />

    return (<StyledWrapper order={order}>
        {countryArticles?.length ? articles() : <NoData />}
        <Modal
        open={open}
        onClose={() => {
          setOpen(false)
          setArticleDetails(undefined)
          }}>
          <div>
            {articleDetails ? 
            (<ArticleDetails close={() => setOpen(false)} articleDetails={articleDetails}/>)
            : <NoData />
            }
          </div>
        </Modal>
    </StyledWrapper>)
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  display: flex;
  flex-direction: ${({order}) => order === 'list' ? 'column' : 'row' };
  flex-wrap: wrap;
`