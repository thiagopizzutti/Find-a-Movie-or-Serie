import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: flex-start;

  label {
    font-weight: bold;
    font-size: 2rem;
    color: #45aaf2;
  }

  input {
    width: 100%;
    font-size: 1.7rem;
    padding: 8px;
    margin-bottom: -16px;
    border: solid 1px #45aaf2;
    border-radius: 5px;
  }
`;
