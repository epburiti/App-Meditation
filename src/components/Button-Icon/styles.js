
import styled from 'styled-components/native';


export const Button = styled.TouchableHighlight`
    margin-Right:40;
    margin-Left:40;
    margin-Top:10;
    padding-Top:20;
    padding-Bottom:20;
    background-color:${props => props.color} ;
    border-Radius:30;
    width:350;
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
  font-size:15;
  font-weight:500;
  width:66%; 
  flex-direction:row;
  justify-content:space-between;
  

// export const Icon = styled(Icon)`
//   /* color: #ffff; */
//   /* height: 24px;
//   width: 24px;
//   transition: all 300ms; */
//   &:hover {
//   }
// `;