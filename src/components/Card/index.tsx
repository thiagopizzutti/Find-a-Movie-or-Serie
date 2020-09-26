import React from 'react';

import { Container } from './styles';

interface IProps {
  title: string;
  year: string
}

const Card: React.FC<IProps> = ({title, year}) => {
  return (
    <Container>
      <h1>{title}</h1>
      <p>{year}</p>
    </Container>
  );
};

export default Card;
