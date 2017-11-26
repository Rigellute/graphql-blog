import logo from './background-image.jpeg';
import styled from 'styled-components';

export const Jumbotron = styled.div`
  background-image: url(${logo});
  background-size: cover;
  height: 60vh;
  wight: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  color: white;
  font-size: 2rem;
`;

export const Input = styled.input`
  border-radius: 3px;
`;
