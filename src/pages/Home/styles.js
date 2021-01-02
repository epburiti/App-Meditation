import styled from 'styled-components/native';
export const Container = styled.View`
 width:100%; 
 /* background-color: red; */

height:65%;
margin-top:35%;
 justify-content:space-between ;
 align-items:center;
`;
export const ViewImg = styled.View`
 &:nth-child(1){
  width: 120;
  height: 120
 }
`;
export const Title = styled.Text`
 font-size:33;
 font-weight:700;
 text-align:center;
color: #3F414E;
`;
export const ViewTxts = styled.View`
  width:80%;
`;
export const TitleRef = styled.Text`
 font-size:17;
 text-align:center;
 color: #A1A4B2;
`;

export const ViewLogin = styled.View`
margin-top:20;
margin-bottom:60;
`;
export const LinkToView = styled.Text`
 color:#8E97FD;
 text-decoration:underline;
`;
export const LoginTxt = styled.Text`
 color:#A1A4B2;
`;
export const Line = styled.View`
  width:30%;
  background-color: #A1A4B2;
  height: 1%;
  border-radius:20;
`;

