import {Button} from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  width: 570px;
  height: 452px;
  background: #ffffff;
  box-shadow: 0px 5px 20px -5px rgba(43, 46, 74, 0.2);
  border-radius: 15px;
`;

export const CoinsContainer = styled.div`
  width: 208px;
  height: 112px;
  background: #4ab9e7;
  opacity: 0.1;
  border-radius: 15px;
`;

export const MedalContainer = styled.div`
  width: 296px;
  height: 112px;
  background: #ab70f1;
  opacity: 0.1;
  border-radius: 15px;
`;

export const ButtonStyled = styled(Button)`
  width: 570px;
  height: 48px;
  border-radius: 8px;
  margin-top: 18px;
  margin-bottom: 21px;
  background: linear-gradient(90deg, #ab70f1 2.6%, #635ffa 47.4%, #4ab9e7 100%);
`;

export const TextContainer = styled.span`
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
`;
