import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2rem;
  margin-bottom: 50px;
  p {
    color: tomato;
    width: 700px;
    margin: -80px 0px 0 90px;
    padding: 20px;
  }
`;
export const SearchResults = styled.div`
  display: flex;
  justify-content: center;
  color: #45aaf2;
  margin-bottom: 50px;
`;
export const ButtonContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  button {
    width: 370px;
  }
`;
export const PaginationButton = styled.div``;

export const PaginationButtonNext = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;
