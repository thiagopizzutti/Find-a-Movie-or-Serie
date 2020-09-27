import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
import { Button } from '../../components';
import { useData } from '../../hooks/useData';
import { Container } from './styles';

interface RouteParams {
  id: string;
}

const Details: React.FC = () => {
  const { selectedItem, handleSelectedItem, isLoading, error } = useData();

  const { id } = useParams() as RouteParams;

  useEffect(() => {
    handleSelectedItem(id);
  }, [handleSelectedItem, id]);

  if (isLoading) {
    return <BounceLoader size={60} color="#45aaf2" />;
  }
  return (
    <Container>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <h1>{selectedItem.Title}</h1>
          <img src={selectedItem.Poster} alt="" />
          <p>
            <strong>Ano: </strong>
            {selectedItem.Year}
          </p>
          <p>
            <strong>Diretor(a): </strong>
            {selectedItem.Director}
          </p>
          <p>
            <strong>Atrizes/Atores: </strong>

            {selectedItem.Actors}
          </p>
        </>
      )}
      <Link to="/">
        <Button>Voltar</Button>
      </Link>
    </Container>
  );
};

export default Details;
