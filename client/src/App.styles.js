// @flow
import logo from './assets/background-image.jpeg';
import styled from 'styled-components';

export const Jumbotron = styled.div`
  background-image: url(${logo});
  background-size: cover;
  height: 60vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  color: white;
  font-size: 3rem;
`;

export const Input = styled.input`
  border-radius: 3px;
`;

export const FlexContainer = styled.div`
  margin-top: 15px;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const FlexChild = styled.div`
  margin: 20px;
  width: 100%;
`;

export const PostList = styled.div``;
