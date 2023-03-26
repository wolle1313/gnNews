import React from 'react';
import styled from 'styled-components';

import theme from 'theme';

interface CenteredModalProps {
    children: React.ReactNode
}

export const CenteredModal: React.FC<CenteredModalProps> = ({children}) => {
  return (<StyledWrapper>
      {children}
</StyledWrapper>)
}
const StyledWrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    max-width: 740px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid black;
    padding: 20px;
    background-color: ${theme.white};
`