
import styled from 'styled-components/native';


export const Button = styled.TouchableHighlight`
    margin-Right:40px;
    margin-Left:40px;
    margin-Top:10px;
    padding-Top:20px;
    padding-Bottom:20px;
    background-color:${props => props.BckColor} ;
    border-Radius:30px;
    width:350px;
    justify-content:center;
    align-items:center;
`;
export const TextBtn = styled.Text`
  color: ${props => props.BckColor == "#8E97FD" ? "#F6F1FB" : "#3F414E"} ;
  text-transform:uppercase;
  font-size:15px;
  font-weight:700;
`;

