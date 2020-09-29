import styled from 'styled-components';

export const Container = styled.div``;

export const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  button {
    width: 100%;
  }

  button + button {
    margin: 0 0 30px 20px;
  }
`;
export const SearchContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;

  label {
    font-size: 30px;
    margin: 10px;
    margin-left: 0;
  }

  input {
    height: 55px;
    font-size: 15px;
  }
  button {
    width: 100%;
    font-size: 1.7rem;
    padding: 8px;
    margin-bottom: 16px;
    border: solid 1px #45aaf2;
    border-radius: 5px;

    :hover {
      background-color: rgba(26, 100, 156, 0.8);
      transition: all 0.2s;
    }
  }
`;

export const StyledLoader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledError = styled.p`
  color: #f24545;
  margin-top: -10px;
`;
