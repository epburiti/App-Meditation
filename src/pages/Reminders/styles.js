import styled from 'styled-components/native';
export const ScrollViewCustom = styled.ScrollView`
background-color:#ffffff;
`;
export const Container = styled.View`
align-items:center;

`;
export const ViewTop = styled.View`
margin-top:10%;
width:90%;
`;
export const TextBold = styled.Text`
font-weight:bold;
font-size:20px;
color:#3F414E;
`;
export const TextOpacity = styled.Text`
font-size:15px;
color:#3F414E;
`;
export const SubTitle = styled.Text`
font-size:13px;
color:#A1A4B2;
margin-top:11px;
`;
export const ViewDate = styled.View`
`;

export const ViewButtons = styled.View`
flex-direction: column;
`;
export const TextButton = styled.Text`
  color:${props => props.color ? "#3F414E" : "#FEFFFE"};
  font-weight:bold;
`;
export const ViewButtonsDate = styled.View`
  flex-direction: row;
  justify-content:space-between;
  width:90%;
  margin:10px 0 ;
`;
export const ButtonCustomDate = styled.TouchableOpacity`
  background-color: ${props => !props.color ? "#3F414E" : "#FEFFFE"};
  border:${props => props.color ? "1px solid #3F414E" : "1px solid #FEFFFE"};

  width:40px;
  height:40px;
  border-radius:20px;
  justify-content:center;
  align-items:center;
`;


