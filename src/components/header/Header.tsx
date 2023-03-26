import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

import theme from 'theme';

import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//@ts-ignore
import mainLogo from 'assets/logos/mainLogo.png'

import { Description } from './Description';
import { LanguageSwitch } from './LanguageSwitch';


export const Header: React.FC = () => {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  return (<StyledHeader>
    <LogoWrapper>
    <Link to='/'>
      <img src={mainLogo} alt={t('header.altLogoImg')!} />
    </Link>
    </LogoWrapper>
    <StyledWrapper>
      <StyledTitle>
        <Typography variant='h2' fontWeight={700} color={theme.primary} fontStyle='italic'>
          {t('header.gnNews')}
        </Typography>
      </StyledTitle>
        <StyledButtonWrapper>
          <Button variant='contained' onClick={() => setOpen(true)}>{t('header.openModal')}</Button>
        </StyledButtonWrapper>

        <LanguageSwitch />

        <Modal
          open={open}
          onClose={() => setOpen(false)}
        >
          <div>
            <Description close={() => setOpen(false)}/>
          </div>
        </Modal>
    </StyledWrapper>
  </StyledHeader>
  )
}

const StyledHeader = styled.header`
    padding-bottom: 50px;
    padding-right: 40px;
    position: relative;
    display: flex;
    @media (max-width: 500px) {
      flex-direction: column;
      padding-right: 0;
      align-items: center;
    }

`
const LogoWrapper = styled.div`
  padding-right: 80px;
  @media (max-width: 500px) {
      padding: 0;
    }
`
const StyledWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  padding-right: 30px;
  @media (max-width: 500px) {
      padding-right: 0;
      margin-top: 30px;
    }
`
const StyledButtonWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`
const StyledTitle = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 740px) {
    display: none;
  }
`