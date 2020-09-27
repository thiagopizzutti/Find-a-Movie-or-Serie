import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../../hooks/useData';
import Card from '../Card';

import { Container } from './styles';

const List: React.FC = () => {
  const { moviesOrSeries, error } = useData();

  return (
    <Container>
      {error ? (
        <p>{error}</p>
      ) : (
        moviesOrSeries?.map(item => (
          <Link to={`/details/${item.imdbID}`} key={item.imdbID}>
            <Card poster={item.Poster} title={item.Title} year={item.Year} />
          </Link>
        ))
      )}
    </Container>
  );
};

export default List;
