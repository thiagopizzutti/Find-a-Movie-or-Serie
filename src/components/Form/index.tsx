import React, { FormHTMLAttributes } from 'react';

import { FormContainer, Content } from './styles';

type IProps = FormHTMLAttributes<HTMLFormElement>;

const Form: React.FC<IProps> = ({ children, ...rest }) => (
  <FormContainer {...rest}>
    <Content>{children}</Content>
  </FormContainer>
);

export default Form;
