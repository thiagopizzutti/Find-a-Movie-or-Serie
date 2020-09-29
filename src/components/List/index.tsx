import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../../hooks/useData';
import Button from '../Button';
import Card from '../Card';

import {
  Container,
  SearchResults,
  ButtonContent,
  PaginationButtonNext,
  PaginationButton,
} from './styles';

const List: React.FC = () => {
  const { moviesOrSeries, page, handlePage, totalPages } = useData();

  return (
    <>
      <SearchResults>
        {!!moviesOrSeries.data.totalResults && (
          <h1>
            Sua busca resultou em: ({' '}
            <strong>{moviesOrSeries.data.totalResults}</strong> resultados)
          </h1>
        )}
      </SearchResults>
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
      <ButtonContent>
        <PaginationButton>
          {page > 1 && (
            <Button onClick={() => handlePage('-')}>anterior</Button>
          )}
        </PaginationButton>

        <PaginationButtonNext>
          {moviesOrSeries.data.items.length !== 0 && page !== totalPages && (
            <Button onClick={() => handlePage('+')}>próximo</Button>
          )}
        </PaginationButtonNext>
      </ButtonContent>
    </>
  );
};

export default List;
