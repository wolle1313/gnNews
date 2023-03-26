import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import { LayoutTypes } from 'redux/NewsLayoutSlice';
import theme from 'theme';

import { ArticleDetailsType } from 'types/ArticleDetailsType';
import { Article } from 'types/Article';
import Typography from '@mui/material/Typography';


interface StyledWrapperProps {
    order: LayoutTypes
}
interface InfoWrapperProps {
    order: LayoutTypes
}

interface ArticleItemProps {
    article: Article;
    order: LayoutTypes;
    setArticleDetails: React.Dispatch<React.SetStateAction<ArticleDetailsType | undefined>> 
    setOpen: React.Dispatch<React.SetStateAction<boolean>> 
}

export const ArticleItem: React.FC<ArticleItemProps> = ({article, order, setArticleDetails, setOpen}) => {
  const { source, publishedAt, title, author, url, description, urlToImage } = article
  const { t } = useTranslation()

  const publishDate = new Date(publishedAt).toLocaleString();
  const onArticleClick = () => {
    setArticleDetails({author, url, description, title});
    setOpen(true);
  }

  return (<StyledWrapper order={order}>
    <StyledButton onClick={onArticleClick}>
        { title && (
        <Typography color={theme.primary} fontWeight={700}>
            { (urlToImage && order === 'tiles') &&
            (<img src={urlToImage} alt={t('article.thumbnailAlt')!}/>)
            }
            {title}
        </Typography>
            )}
        <InfoWrapper order={order}>
        { source && (
            <Typography variant='body2'>
            {t('article.source')} {source.name}
        </Typography>)
        }
        { publishDate && (
        <Typography variant='body2'>
            {t('article.publishedAt')} {publishDate}
        </Typography>
            )}    
        </InfoWrapper>
    </StyledButton>
</StyledWrapper>)
}

const StyledWrapper = styled.div<StyledWrapperProps>`
    border: 1px solid black;
    margin: 10px 5px;
    padding: 10px 5px;
    border-radius: 10px;
    width: ${({order}) => order === 'list' ? 'unset' : '45%'};
`
const InfoWrapper = styled.div<InfoWrapperProps>`
    display: flex;
    flex-direction: ${({order}) => order === 'list' ? 'row' : 'column'};
    margin-top: 5px;
    justify-content: space-between;
`
const StyledButton = styled.button`
    border: none;
    width: 100%;
    cursor: pointer;
`