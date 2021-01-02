import styled from 'styled-components/native';

export const Line = styled.View`
  width:35%;
  background-color: ${props => props.color == "#A1A4B2" ? "#A1A4B2" : props.color};
  height: 0.7%;
  border-radius:20px;
  margin:50px 0 10px 0;
`;