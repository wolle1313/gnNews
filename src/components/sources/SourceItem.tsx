import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import theme from 'theme';

import { Source } from 'types/Source';
import Typography from '@mui/material/Typography';
import { LayoutTypes } from 'redux/NewsLayoutSlice';


interface StyledWrapperProps {
    order: LayoutTypes
  }

interface SourceItemProps {
    source: Source;
    order: LayoutTypes;
}

export const SourceItem: React.FC<SourceItemProps> = ({source, order}) => {
  const {name, url, description } = source
  const { t } = useTranslation()

  return (<StyledWrapper order={order}>
        { name && (
        <Typography color={theme.primary} fontWeight={700}>
            {name}
        </Typography>
            )}
        { description && (
            <Typography variant='body2'>
             {description}
        </Typography>)
        }
        { url && (
        <LinkWrapper>
            <Typography variant='body2'>
                <a href={url}>{t('misc.link')}{url}</a>
            </Typography>
        </LinkWrapper>
            )}
</StyledWrapper>)
}

const StyledWrapper = styled.div<StyledWrapperProps>`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    margin: 10px 5px;
    padding: 10px;
    border-radius: 10px;
    width: ${({order}) => order === 'list' ? 'unset' : '45%'};
`
const LinkWrapper = styled.div`
    margin-top: 20px;
    white-space: nowrap;
    flex-grow: 1;
    display: flex;
    align-items: flex-end;
`