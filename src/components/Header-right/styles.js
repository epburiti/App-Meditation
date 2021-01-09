import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  margin: 0px  10px 120px 20px;
flex-direction:row;
`;

export const Btn = styled.TouchableOpacity`
z-index:99;
background-color: #03174C;
justify-content:center;
align-items:center;
  border:1px solid #EBEAEC;
  border-radius:25px;
  height:50px;
  width:50px;
  margin-right:5px;
`;

export const IconCustom = styled(Icon)`
  
`;
