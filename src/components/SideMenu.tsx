import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { flagIcon } from 'utils/flagLink';
import theme from 'theme';
import countries from 'constants/Countries';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



export const SideMenu: React.FC = () => {
    const { t } = useTranslation()

  return (<StyledWrapper>
    <Typography variant='h6'>
        {t('aside.chooseCountry')}
    </Typography>
    {countries.map(country => 
        <Link key={country.name} to={`/country/${country.countryCode}`}>
            <ButtonWrapper>
                <Button variant='contained'>
                    <StyledText variant='body2' >
                        {t(country.name)}
                    </StyledText>
                    <img src={flagIcon(country.flagTag)} alt={country.name}/>
                </Button>
            </ButtonWrapper>
        </Link>
        )}
</StyledWrapper>)
}
const StyledWrapper = styled.aside`
    display: flex;
    flex-direction: column;
    min-width: 200px;
    margin-right: 50px;
    background-color: ${theme.darkGrey};
    border-radius: 10px;
    padding: 10px 10px 30px 10px;
    height: fit-content;
    @media (max-width: 740px) {
        align-items: center;
        margin-right: 0;
        margin-bottom: 30px;
    }
`
const ButtonWrapper = styled.div`
    margin: 10px 10px;
`
const StyledText = styled(Typography)`
    padding-right: 5px;
`