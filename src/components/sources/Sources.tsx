import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { RootState } from 'redux/store';
import styled from 'styled-components';

import useSources from 'hooks/useSources';
import { LayoutTypes } from 'redux/NewsLayoutSlice';

import Typography from '@mui/material/Typography';

import { ErrorPage } from 'components/common/ErrorPage';
import { LoadingPage } from 'components/LoadingPage';
import { SourceItem } from './SourceItem';

interface StyledWrapperProps {
  order: LayoutTypes
}

export const Sources: React.FC = () => {
  const { fetchStatus, sources } = useSources()
  const { order } = useSelector((state: RootState) => state.newsLayout)
  const { t } = useTranslation()

  const sourcesArray = useCallback(() => 
    sources?.map(source => 
    <SourceItem 
      key={source.id}
      source={source}
      order={order} />),
    [sources, order])

    if(fetchStatus.error) return <ErrorPage errorMessage={t('error.newsFetchFailed')}/>

    if(fetchStatus.loading) return <LoadingPage />

    return (<div>
        <Typography>
            {t('source.sources')}
        </Typography>
        <StyledWrapper order={order}>
        {sourcesArray()}
        </StyledWrapper>
    </div>)
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  display: flex;
  flex-direction: ${({order}) => order === 'list' ? 'column' : 'row' };
  flex-wrap: wrap;
`