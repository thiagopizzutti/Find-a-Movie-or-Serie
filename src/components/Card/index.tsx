import React from 'react';

import { useData } from '../../hooks/useData';

import { Container } from './styles';

interface IProps {
  title: string;
  year: string;
  poster: string;
}

const Card: React.FC<IProps> = ({ title, year, poster }) => {
  const { handleBrokenImg } = useData();
  return (
    <Container>
      <img src={poster} alt="Poster" onError={handleBrokenImg} />
      <h3>{title}</h3>
      <p>{year}</p>
    </Container>
  );
};

export default Card;
