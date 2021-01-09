import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const Container = styled.View`
width:90%;
margin: 20px auto 0 auto;

`;
export const ContainerScroll = styled.ScrollView`
  background-color: #ffffff;
`;

export const ViewTop = styled.View`
`;

export const TextBold = styled.Text`
font-weight:bold;
font-size:25px;
color:#3F414E;
`;
export const ImageTopHeader = styled.Image`
height:300px;
`;
export const TextOpacity = styled.Text`
margin-top:5px;
font-size:15px;
color:#A1A4B2;
`;
export const IconCustom = styled(Icon)`
  margin-right:7px;
`;
export const IconCustomFontisto = styled(Fontisto)`
  margin-right:7px;
`;

export const ViewIcons = styled.View`
margin-right:auto;
margin-top:20px;
width:90%;
flex-direction:row;
justify-content:space-around;
`;
export const ContainerIcons = styled.View`
flex-direction:row;
`;
export const TextIcon = styled.Text`
color:#A1A4B2;
font-size:16px;
`;
export const TextTabs = styled.Text`
font-weight:bold;
font-size:20px;
color:#3F414E;
margin-top:15px;

`;
export const TextButtonHeader = styled.Text`
  text-transform:uppercase;
  letter-spacing:2px;
  color:${props => props.color ? "#8E97FD" : "#A1A4B2"};
  height:40px;
  border-bottom-color: ${props => props.color ? "#8E97FD" : "transparent"};
  border-bottom-width: 1px;
  font-size:16px;

`;
export const ViewTabBars = styled.View`
margin-top:15px;
`;
export const ViewTabBarsHeader = styled.View`
flex-direction:row;
justify-content:space-around;
width:100%;
`;
export const ButtonHeader = styled.TouchableOpacity`
`;
export const ContainerSongs = styled.View`
  width:100%;

`;
export const ButtonPlaySong = styled.TouchableOpacity`
flex-direction:row;
border-top-color: #ADB8D9;
  border-top-width: 1px;
  padding:20px;
`;
export const IconPlay = styled(AntDesign)`
margin: 0 5px 0 5px;
`;
export const ContainerSongsTitles = styled.View`
margin-left:15px;
`;
export const TitleSong = styled.Text`
color: #3F414E;
font-weight:bold;
font-size:15px;
`;
export const SubTitleSong = styled.Text`
color:#A1A4B2;
text-transform:uppercase;
letter-spacing:1px;
font-size:12px;

`;