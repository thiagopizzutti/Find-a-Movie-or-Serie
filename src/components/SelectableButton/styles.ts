import styled from 'styled-components';

interface StyledButtonProps {
  isActive?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`

  max-width: 600px;
  height: 55px;
  padding: 15px;
  color: ${(props) => (props.isActive ? 'white' : '#45aaf2')};
  text-transform: uppercase;
  background-color: ${(props) => (props.isActive ? '#45aaf2' : 'white')};
  font-weight: bolder;
  font-size: 1.5rem;
  margin-top: 40px;
  border: 2px solid #45aaf2;
  border-radius: 5px;
`
