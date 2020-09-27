import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../../hooks/useData';
import Card from '../Card';

import { Container } from './styles';

const List: React.FC = () => {
  const { moviesOrSeries } = useData();

  return (
    <>
      {!!moviesOrSeries.data.totalResults && (
        <h1>
          Sua busca resultou em:{' '}
          <strong>{moviesOrSeries.data.totalResults}</strong>
        </h1>
      )}
      <Container>
        {moviesOrSeries.error ? (
          <p>{moviesOrSeries.error}</p>
        ) : (
          moviesOrSeries.data.items.map(item => (
            <Link to={`/details/${item.imdbID}`} key={item.imdbID}>
              <Card poster={item.Poster} title={item.Title} year={item.Year} />
            </Link>
          ))
        )}
      </Container>
    </>
  );
};

export default List;
