import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { DataDetailsContext } from 'contexts/DataDetailsContext';
import theme from 'theme';

import Typography from '@mui/material/Typography';

import Time from './common/Time';


export const Footer: React.FC = () => {
  const { itemNumber } = useContext(DataDetailsContext)
  const { t } = useTranslation()
  return (<StyledFooter>
      <Time/>
      <Typography>
        {t('footer.listNumber')} {itemNumber}
      </Typography>
</StyledFooter>)
}

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  padding: 30px 10px;
  margin-top: 50px;
  border-radius: 10px;
  color: ${theme.white};
  background-color: ${theme.blue};
`