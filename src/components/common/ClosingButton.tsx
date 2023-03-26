import React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';

interface ClosingButtonProps {
    close: () => void;
}

export const ClosingButton: React.FC<ClosingButtonProps> = (props) => {
  const {close} = props

  return (<StyledWrapper>
    <IconButton onClick={close}>
      <CloseIcon />
    </IconButton>
  </StyledWrapper>
)}

const StyledWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 50px;
`