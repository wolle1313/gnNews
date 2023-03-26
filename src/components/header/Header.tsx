import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

import useDeviceType from 'utils/deviceUtils';

import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button';
//@ts-ignore
import mainLogo from 'assets/logos/mainLogo.png'

import { LayoutFilters } from './LayoutFilters';
import { Description } from './Description';
import { LanguageSwitch } from './LanguageSwitch';


export const Header: React.FC = () => {
  const { isDesktop } = useDeviceType();
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  return (<StyledHeader>
    <LogoWrapper>
    <Link to='/'>
      <img src={mainLogo} alt={t('header.altLogoImg')!} />
    </Link>
    </LogoWrapper>
    <StyledWrapper>
      {isDesktop && (
        <LayoutFilters />
      )}
        <StyledButtonWrapper>
          <Button variant='contained' onClick={() => setOpen(true)}>{t('header.openModal')}</Button>
        </StyledButtonWrapper>

        <LanguageSwitch />

        <Modal
          open={open}
          onClose={() => setOpen(false)}
        >
          <div>
            <Description />
          </div>
        </Modal>
    </StyledWrapper>
  </StyledHeader>
  )
}

const StyledHeader = styled.header`
    padding-bottom: 50px;
    position: relative;
    display: flex;
    align-items: flex-end;
    @media (max-width: 425px) {
      flex-direction: column;
      align-items: center;
    }

`
const LogoWrapper = styled.div`
  padding-left: 40px;
  padding-right: 100px;
  @media (max-width: 425px) {
      padding: 0;
    }
`
const StyledWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  padding-right: 30px;
  @media (max-width: 425px) {
      padding-right: 0;
      margin-top: 30px;
    }
`
const StyledButtonWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`