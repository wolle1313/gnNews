import React from 'react';
import { useTranslation } from 'react-i18next';

import Typography from '@mui/material/Typography';

import { CenteredModal } from './common/CenteredModal';


export const NoData: React.FC = () => {
  const { t } =  useTranslation()

  return (<CenteredModal>
      <Typography>
        {t('error.noArticleDetails')}
      </Typography>
</CenteredModal>)
}