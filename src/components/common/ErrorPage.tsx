import Typography from '@mui/material/Typography';
import React from 'react';
import styled from 'styled-components';

interface ErrorPageProps {
    errorMessage: string;
}

export const ErrorPage: React.FC<ErrorPageProps> = ({errorMessage}) => {
  return (<StyledWrapper>
      <Typography>
        {errorMessage}
      </Typography>
</StyledWrapper>)
}

const StyledWrapper = styled.div`
    display: flex;
    padding: 50px;
    justify-content: center;
    align-items: center;
`