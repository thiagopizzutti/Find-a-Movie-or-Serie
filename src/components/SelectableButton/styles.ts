import styled from 'styled-components';

interface StyledButtonProps {
  isActive?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  height: 55px;
  padding: 15px;
  color: ${props => (props.isActive ? 'white' : '#45aaf2')};
  text-transform: uppercase;
  background-color: ${props => (props.isActive ? '#45aaf2' : 'white')};
  font-weight: bolder;
  font-size: 1.5rem;
  border: 2px solid #45aaf2;
  border-radius: 5px;
  :hover {
    transform: scale(0.97, 0.97);
  }
`;
