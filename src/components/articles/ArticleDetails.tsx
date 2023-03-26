import React from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleDetailsType } from 'types/ArticleDetailsType';
import Typography from '@mui/material/Typography';

import { CenteredModal } from 'components/common/CenteredModal';
import { ClosingButton } from 'components/common/ClosingButton';

interface ArticleDetailsProps {
    articleDetails: ArticleDetailsType
    close: () => void;
}

export const ArticleDetails: React.FC<ArticleDetailsProps> = ({articleDetails, close}) => {
    const { author, description, url, title } = articleDetails
    const { t } = useTranslation()

  return (<CenteredModal>
    <ClosingButton close={close} />
      { author && (
        <Typography>
            {t('article.author')} {author}
        </Typography>
            )}
        { description && (
            <Typography>
            {description}
        </Typography>)
        }
        { url && (
            <Typography>
            {t('misc.link')} 
            <a href={url}>{title}</a>
        </Typography>
        )}
</CenteredModal>)
}
