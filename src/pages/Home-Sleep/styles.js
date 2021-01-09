import styled from 'styled-components/native';

export const ImageTop = styled.ImageBackground`
`;

export const ScrollViewCustom = styled.ScrollView`
`;

export const Container = styled.View`
align-items:center;
`;
export const ViewTop = styled.View`
margin-top:10%;
width:80%;
align-items:center;
`;
export const SubTitle = styled.Text`
font-size:14px;
color:#E6E7F2;
margin-top:5px;
text-align:center;
`;

export const TextBold = styled.Text`
  font-weight:bold;
  font-size:20px;
  color:#E6E7F2;
`;
export const ViewIconsTop = styled.View`
justify-content:space-between;
flex-direction:row;
width:90%;
margin-top:30px;
width:90%;
`;

export const IconCustom = styled.TouchableOpacity`
justify-content:center;
align-items:center;
background-color:${props => props.bckColor ? props.bckColor : "#A0A3B1"};
width:50px;
height:50px;
border-radius:20px;
`;
export const ButtonImgTop = styled.TouchableOpacity`
margin-top:30px;

`;
export const FlatListCustom = styled.FlatList`
flex-direction:row;
  width:90%;
  margin:40px 0 20px 0 ;
`;

export const ViewImgContainer = styled.TouchableOpacity`
margin: 10px 15px 0 0; 

`;
export const TxtFooter = styled.Text`
margin: 2px 0 ;
font-weight:bold;
color:#E6E7F2;
font-size:17px;
`;
export const TxtFooterOpacity = styled.Text`
color:#98A1BD;
font-size:11px;
`;