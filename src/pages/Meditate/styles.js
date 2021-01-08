import styled from 'styled-components/native';

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
color:#A1A4B2;
margin-top:5px;
text-align:center;
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
export const ContainerImgs = styled.View`
margin-top:30px;
flex-direction:row;
/* flex-wrap:wrap; */
width:90%;
`;
export const ContainerImgsSub = styled.View`
/* marginleft */
`;
export const ViewImgContainer = styled.TouchableOpacity`
width:48%;
margin: 10px;

`;