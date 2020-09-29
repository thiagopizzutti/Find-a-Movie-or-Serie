import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 40px;
  max-width: 800px;
  min-width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  img {
    width: 280px;
    margin-bottom: 30px;
  }
  > p {
    font-size: 50px;
    color: #404552;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 45px;
  font-weight: bold;
  color: #404552;
  line-height: 56px;
  margin-bottom: 25px;
`;

export const Content = styled.div`
  max-width: 700px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-content: flex-start;

p{
  margin-bottom: 18px;
  color: #404552

}

}
`;

export const StyledButton = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: flex-start;
`;
