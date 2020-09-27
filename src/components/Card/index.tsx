import React from 'react';

import { Container } from './styles';

interface IProps {
  title: string;
  year: string;
  poster: string;
}

const Card: React.FC<IProps> = ({ title, year, poster }) => {
  return (
    <Container>
      <img src={poster} alt="Poster" />
      <h3>{title}</h3>
      <p>{year}</p>
    </Container>
  );
};

export default Card;
