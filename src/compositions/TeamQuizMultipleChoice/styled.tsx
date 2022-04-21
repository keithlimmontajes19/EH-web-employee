import styled from 'styled-components';
import {theme} from 'utils/colors';
import {Button} from 'antd';

export const Container = styled.div`
  padding-horizontal: 20px;
`;

export const SubContainer = styled.div`
  padding: 15px;
`;

export const TextContainer: any = styled.div`
  padding: 10px;
  margin-top: 15px;
  border-radius: 15px;
  border: 1px solid ${theme.LINK_TEXT};
  background: ${(props: any) => props.background};
  box-shadow: 0px 4px 8px rgba(10, 130, 0, 0.05);
`;

export const FlexWrapContainer = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
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
