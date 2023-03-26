import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

// @ts-ignore
import loading from 'assets/loading.gif'

interface LoadingPageProps {
}

export const LoadingPage: React.FC<LoadingPageProps> = (props) => {
  const { t } = useTranslation()

  return (<StyledWrapper>
      <img src={loading} alt={t('misc.loading')!} />
</StyledWrapper>)
}

const StyledWrapper = styled.div`
    display: flex;
    padding: 50px;
    justify-content: center;
    align-items: center;
`