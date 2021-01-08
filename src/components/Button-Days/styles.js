
import styled from 'styled-components/native';

export const ButtonCustomDate = styled.TouchableOpacity`
  background-color: ${props => !props.color ? "#3F414E" : "#FEFFFE"};
  border:${props => props.color ? "1px solid #3F414E" : "1px solid #FEFFFE"};

  width:40px;
  height:40px;
  border-radius:20px;
  justify-content:center;
  align-items:center;
`;

export const TextButton = styled.Text`
  color:${props => props.color ? "#3F414E" : "#FEFFFE"};
  font-weight:bold;
`;