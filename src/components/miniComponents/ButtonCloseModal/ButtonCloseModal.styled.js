import styled from '@emotion/styled';
import { baseTransition } from 'styles';

export const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
  fill: ${props => props.theme.colors.closeModalBtn};
  transition: fill ${baseTransition};

  &:hover,
  &:focus {
    fill: ${props => props.theme.colors.closeModalBtnHover};
  }
`;
