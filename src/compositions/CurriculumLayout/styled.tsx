import styled from 'styled-components';
import {Button} from 'antd';

export const Container = styled.div``;
export const SubContainer = styled.div`
  margin-top: 35px;
  margin-left: 40px;
  background: #fff;
`;

export const TitleStyled = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  color: #635ffa;
`;

export const StyledStart = styled(Button)`
  position: absolute;
  left: 84.86%;
  right: 4.93%;
  top: 80.92%;
  bottom: 4.39%;
  border-radius: 8px;
  min-width: 147px;
  height: 48px;
  color: #fff;
  font-weight: bold;
  background: linear-gradient(90deg, #ab70f1 2.6%, #635ffa 47.4%, #4ab9e7 100%);
`;

export const StyledWhite = styled(Button)`
  position: absolute;
  left: 72%;
  right: 4.93%;
  top: 80.92%;
  bottom: 4.39%;
  border-radius: 8px;
  min-width: 147px;
  height: 48px;
  color: #635ffa;
  font-weight: bold;
  background: #fff;
  border: none;
`;
