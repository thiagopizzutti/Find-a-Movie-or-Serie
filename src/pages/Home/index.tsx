import React from 'react';
import List from '../../components/List';
import Search from '../../components/Search';
import { Title, Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Title>Encontre seu filme ou série favorita</Title>
      <Search />
      <List />
    </Container>
  );
};

export default Home;
