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
  const { selectedItem, handleSelectedItem } = useData();

  const { id } = useParams() as RouteParams;

  useEffect(() => {
    handleSelectedItem(id);
  }, [handleSelectedItem, id]);

  if (selectedItem.loading) {
    return <BounceLoader size={60} color="#45aaf2" />;
  }
  return (
    <Container>
      {selectedItem.error ? (
        <p>{selectedItem.error}</p>
      ) : (
        <>
          <h1>{selectedItem.data.Title}</h1>
          <img src={selectedItem.data.Poster} alt="" />
          <p>
            <strong>Ano: </strong>
            {selectedItem.data.Year}
          </p>
          <p>
            <strong>Diretor(a): </strong>
            {selectedItem.data.Director}
          </p>
          <p>
            <strong>Atrizes/Atores: </strong>

            {selectedItem.data.Actors}
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
