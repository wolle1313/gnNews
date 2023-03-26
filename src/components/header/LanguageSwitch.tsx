import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { flagIcon } from 'utils/flagLink';
import languages from 'constants/Languages';

import IconButton from '@mui/material/IconButton';


export const LanguageSwitch: React.FC = () => {
    const { t, i18n } = useTranslation()
  return (<StyledWrapper>
      {languages.map(lng => 
        <IconButton key={lng.tag} onClick={() => i18n.changeLanguage(lng.tag)} disabled={i18n.resolvedLanguage === lng.tag}>
            <img src={flagIcon(lng.flag)} alt={t(lng.name)!} />
        </IconButton>
        )}
</StyledWrapper>)
}

const StyledWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 20px;
`