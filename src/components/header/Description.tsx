import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import theme from 'theme';


export const Description: React.FC = () => {
  const { t } = useTranslation()
  return (<StyledWrapper>
    <Typography variant='h4'>
       {t('description.struggle')}
    </Typography>
    <Typography marginTop='10px'>
      <Link href={'https://github.com/axios/axios/issues/1510'}>{t('description.struggleAnswer1')}</Link>
      {t('description.struggleAnswer2')}
    </Typography>
    <Typography marginTop='30px' variant='h4'>
       {t('description.pleasure')}
    </Typography>
    <Typography marginTop='10px'>
      {t('description.pleasureAnswer')}
    </Typography>
  </StyledWrapper>)
}

const StyledWrapper = styled.div`
  padding: 50px 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  background-color: ${theme.white};
`