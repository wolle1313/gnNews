import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from 'redux/store';
import useDeviceType from 'utils/deviceUtils';
import { changeLayout } from 'redux/NewsLayoutSlice';

import theme from 'theme';

import { Footer } from './Footer';
import { Header } from './header/Header';
import { SideMenu } from 'components/SideMenu';

export const BasicLayout: React.FC = () => {
    const { isTablet } = useDeviceType()
    const { order } = useSelector((state: RootState) => state.newsLayout) 
    const dispatch = useDispatch()

    useEffect(() => {
        if(isTablet) {
            if(order !== 'list')
            dispatch(changeLayout('list'));
        }

    }, [isTablet])

  return (<StyledWrapper>
      <Header />
      <StyledMidSection>
      <SideMenu />
      <Outlet />
      </StyledMidSection>
      <Footer />
    </StyledWrapper>)
}

const StyledWrapper = styled.div`
    max-width: 1240px;
    margin: 50px auto 0 auto;
    padding: 0 50px;
    background-color: ${theme.lightGrey};
    @media (max-width: 740px) {
        padding: 0 5px;
    }
`
const StyledMidSection = styled.div`
    display: flex;
    align-self: stretch;
    @media (max-width: 740px) {
        align-items: center;
        flex-direction: column
    }
`