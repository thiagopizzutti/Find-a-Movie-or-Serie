import React, { ButtonHTMLAttributes } from 'react';

import { StyledButton } from './styles';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

const SelectableButton: React.FC<IProps> = ({
  isActive,
  children,
  ...rest
}) => {
  return (
    <StyledButton isActive={isActive} {...rest}>
      {children}
    </StyledButton>
  );
};

export default SelectableButton;
