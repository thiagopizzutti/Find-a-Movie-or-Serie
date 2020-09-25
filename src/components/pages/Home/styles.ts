import styled from 'styled-components';
import { shade } from 'polished';




export const Container = styled.header`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  font-weight: bold;
  color: #a3a3a3;
  line-height: 56px;
  margin-top: 80px;
`;

export const Choices = styled.form`
  width:70%;
  margin-top: 40px;
  display: flex;
  justify-content: center;

   button {
    width: 50%;
    height: 60px;
    background: #dfdcd2;
    border-radius: 5px;
    border: 0;
    color: #555;
    font-size: 30px;
    font-weight: bold;
    transition: background 0.4s;
    box-shadow: 1px 1px 3px 2px grey;
    margin-left: 10px;

    &:hover {
      background: ${shade(0.2, '#dfdcd2')};
    }
  }
`;
export const Form = styled.form`
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: center;

  input {
    width: 50%;
    height: 60px;
    padding: 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    font-size: 30px;
    box-shadow: 1px 1px 3px 2px grey;
    border: 2px solid #fff;
    border-right: 0;
  }

  button {
    width: 210px;
    height: 60px;
    background: #dfdcd2;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #555;
    font-size: 30px;
    font-weight: bold;
    transition: background 0.4s;
    box-shadow: 1px 1px 3px 2px grey;

    &:hover {
      background: ${shade(0.2, '#dfdcd2')};
    }
  }
`;
