import React from 'react'
import { Title, Form, Container, Choices } from './styles';

const Home = () => {
  return (
    <>
      <Title>My Movie Finder</Title>

      <Container>
        <Choices>
          <button type="submit">Movies</button>
          <button type="submit">Series</button>
        </Choices>
        <Form>
          <input placeholder="Type a movie or a serie name here" />
          <button type="submit">Search</button>
        </Form>
      </Container>
    </>
  );
}

export default Home
