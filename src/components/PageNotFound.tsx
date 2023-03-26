import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import Typography from '@mui/material/Typography';

export const PageNotFound: React.FC = () => {
  const { t } = useTranslation()

  return (<StyledWrapper>
      <Typography variant='h5'>
        {t('error.pageNotFound')}
      </Typography>
</StyledWrapper>)
}

const StyledWrapper = styled.div`
    margin: 100px auto;
    width: 500px;
    text-align: center;
`