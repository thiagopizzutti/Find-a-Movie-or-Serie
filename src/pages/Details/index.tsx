import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
import { Button } from '../../components';
import { useData } from '../../hooks/useData';
import {
  Title,
  Content,
  Container,
  StyledButton,
  StyledLoader,
} from './styles';

interface RouteParams {
  id: string;
}

const Details: React.FC = () => {
  const { selectedItem, handleSelectedItem, handleBrokenImg } = useData();

  const { id } = useParams() as RouteParams;

  useEffect(() => {
    handleSelectedItem(id);
  }, [handleSelectedItem, id]);

  if (selectedItem.loading) {
    return (
      <StyledLoader>
        <BounceLoader size={60} color="#45aaf2" />
      </StyledLoader>
    );
  }
  return (
    <Container>
      {selectedItem.error ? (
        <p>
          {selectedItem.error}
          <Link to="/">
            <Button>Voltar para página de busca</Button>
          </Link>
        </p>
      ) : (
        <>
          <Title>{selectedItem.data.Title}</Title>

          <img
            src={selectedItem.data.Poster}
            alt="Poster"
            onError={handleBrokenImg}
          />
          <Content>
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
            <p>
              <strong>Info: </strong>
              {selectedItem.data.Plot}
            </p>
          </Content>
          <StyledButton>
            <Link to="/">
              <Button>Voltar</Button>
            </Link>
          </StyledButton>
        </>
      )}
    </Container>
  );
};

export default Details;
