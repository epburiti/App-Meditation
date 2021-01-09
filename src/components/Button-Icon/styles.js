
import styled from 'styled-components/native';


export const Button = styled.TouchableHighlight`
    margin-Right:40px;
    margin-Left:40px;
    margin-Top:10px;
    padding-Top:20px;
    padding-Bottom:20px;
    background-color:${props => props.color} ;
    border-Radius:30px;
    width:350px;
    justify-content:center;
    align-items:center;
    border: ${props => props.border};
`;
export const TextBtn = styled.Text`
  color: ${props => props.fontColor};
  text-transform:uppercase;
  font-size:15;
  font-weight:500;
`;
export const ViewBtn = styled.View`
  color:#F6F1FB;
  text-transform:uppercase;
  font-size:15px;
  font-weight:500;
  width:66%; 
  flex-direction:row;
  justify-content:space-between;
  `

// export const Icon = styled(Icon)`
//   /* color: #ffff; */
//   /* height: 24px;
//   width: 24px;
//   transition: all 300ms; */
//   &:hover {
//   }
// `;