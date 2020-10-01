import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1.5rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 890px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 680px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const SearchResults = styled.div`
  display: flex;
  justify-content: center;
  color: #45aaf2;
  margin-bottom: 30px;
`;
export const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-right: 30px;

  @media (max-width: 1550px) {
    width: 100%;
    display: flex;
    justify-content: center;
    button {
      margin-left: 30px;
      width: 500px;
    }
  }
  @media (max-width: 1121px) {
    width: 100%;
    display: grid;
    justify-content: center;
    button {
      margin-left: 30px;
      width: 700px;
    }
  }
  @media (max-width: 760px) {
    width: 100%;
    display: grid;
    justify-content: center;
    button {
      margin-left: 30px;
      width: 500px;
    }
  }
  @media (max-width: 560px) {
    width: 100%;
    display: grid;
    justify-content: center;
    button {
      margin-left: 30px;
      width: 320px;
    }
  }
`;
export const PaginationButton = styled.div``;

export const PaginationButtonNext = styled.div``;
