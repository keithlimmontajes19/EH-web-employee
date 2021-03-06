import styled from 'styled-components';
import {theme} from 'utils/colors';

export const Container = styled.div``;
export const MenuContainer = styled.div`
  min-height: 100vh;
  background: ${theme.SUB_LAYOUT};
  margin-top: -22px;
`;

export const TitleStyled = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  color: #635ffa;
  padding: 22px;
  margin-top: 25px;
  margin-bottom: 10px;
`;

export const StyledLabel = styled.p<any>`
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  margin-top: 15px;
  color: ${(props) => props.color};
`;

export const SubLabel = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: ${(props) => props.color};
`;

export const MenuLabel = styled.p<any>`
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-top: 15px;
  color: ${(props) => props.color};
`;

export const MenuSublabel = styled.p<any>`
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  color: ${(props) => props.color};
`;
