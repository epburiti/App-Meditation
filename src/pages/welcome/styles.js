import styled from 'styled-components/native';

export const Container = styled.View`
  height:83%;
  margin-top:22%;
  justify-content:space-between;
  align-items:center;

  &:nth-child(2){
    margin-top:200px !important;
  }
`;
export const ViewTop = styled.View`
margin-top:50px;
width:80%;
margin-bottom:260px !important;

`;

export const TxtStrong = styled.Text`
  color:#FFECCC;
  font-weight:bold;
  font-size:26px;
  text-align:center;

`;

export const TxtWithOpacity = styled.Text`
  color:#FFECCC;
  font-size:23px;
  text-align:center;
`;
export const TxtInfo = styled.Text`
  color:#EBEAEC;
  text-align:center;
  font-size:13px;
margin-top:20px;

`;
