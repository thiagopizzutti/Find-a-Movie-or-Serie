import styled from 'styled-components';

export const Container = styled.div`
  min-width: 300px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ButtonContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  button {
    width: 370px;
    margin: 0 0 50px 0;
  }
`;
export const SearchContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  label {
    font-size: 30px;
  }

  input {
    width: 600px;
    height: 50px;
    font-size: 20px;
    margin: 15px 0 20px 0;
  }
  button {
    width: 400px;
    height: 50px;
    margin-top: 12px;
    border-radius: 0 5px 5px 0;
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
