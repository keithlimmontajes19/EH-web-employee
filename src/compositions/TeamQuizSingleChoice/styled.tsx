import styled from 'styled-components';
import {Button} from 'antd';

export const Container: any = styled.div``;
export const ChoicesContainer = styled.div<any>`
  height: 66px;
  width: 50%;
  background: #fff;
  margin-top: 20px;
  box-shadow: 0px 5px 20px -5px rgba(43, 46, 74, 0.2);
  border-left: 15px solid ${(props: any) => props.border};
`;

export const StyledStart = styled(Button)`
  position: absolute;
  right: 3%;
  top: 80.92%;
  bottom: 4.39%;
  border-radius: 8px;
  min-width: 147px;
  height: 48px;
  color: #fff;
  font-weight: bold;
  background: #635ffa;
`;

export const DescriptionStyled = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: #2b2e4a;
  opacity: 0.8;
  margin-bottom: 35px;
`;

export const TitleStyled = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  color: #2b2e4a;
`;

export const QuestionStyled = styled.p`
  font-style: normal;
  line-height: 28px;
  font-weight: 700;
  font-size: 22px;
  color: #635ffa;
`;
