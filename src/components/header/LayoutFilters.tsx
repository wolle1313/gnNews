import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import { RootState } from 'redux/store';
import { changeLayout } from 'redux/NewsLayoutSlice';
import layouts from 'constants/Layouts';
import theme from 'theme';

import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';



export const LayoutFilters: React.FC = memo(() => {    
    const layoutState = useSelector((state: RootState) => state.newsLayout)
    const dispatch = useDispatch()
    const { t } = useTranslation();
  return (
    <StyledWrapper>
    <Typography>
        {t('header.chooseLayout')}
    </Typography>
        <StyledButtonGroup
        >
            {layouts.map(layout => (
                <IconButton
                key={layout.order}
                color={layout.order === layoutState.order ? 'primary' : 'default'} 
                onClick={() => dispatch(changeLayout(layout.order))}>
                    {<layout.icon />}
                </IconButton>
            ))}

        </StyledButtonGroup>
    </StyledWrapper>)
})

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
    margin: 0 20px;
    background-color: ${theme.darkGrey};
    border-radius: 10px;
`
const StyledButtonGroup = styled(ButtonGroup)`
    display: flex;
    justify-content: center;
`