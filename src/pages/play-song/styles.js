import styled from 'styled-components/native';

export const ImageBackgroundCustom = styled.ImageBackground`
  width:100%;
  height:100%;
`;
export const ScrollViewCustom = styled.ScrollView`
  background-color:#ffffff;
`;
export const ViewIconstPlayer = styled.View`
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  width:70%;
  margin-top:50px;
`;
export const Container = styled.View`
height:100%;
  justify-content:center;
  align-items:center;
`;
export const ViewMid = styled.View`
  align-items:center;
  
`;
export const TextBold = styled.Text`
font-weight:bold;
font-size:28px;
color: ${props => props.color};
`;
export const TextOpacity = styled.Text`
margin-top:5px;
font-size:15px;
color: ${props => props.color};

`;