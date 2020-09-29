import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { Container } from './styles';
import error from '../../assets/404-error.svg';

const Error404: React.FC = () => {
  return (
    <Container>
      <img src={error} alt="404" />
      <Link to="/">
        <Button>Voltar</Button>
      </Link>
    </Container>
  );
};

export default Error404;
