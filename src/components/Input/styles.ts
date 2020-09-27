import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  label {
    font-weight: bold;
    margin-bottom: -10px;
    font-size: 2rem;
    color: #45aaf2;
  }

  input {
    width: 100%;
    font-size: 1.7rem;
    padding: 8px;
    margin-bottom: 16px;
    border: solid 1px #45aaf2;
    border-radius: 5px 0 0 5px;
  }
`;
