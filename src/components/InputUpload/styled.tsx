import styled from 'styled-components';
import {Button, Input} from 'antd';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledInput = styled(Input)`
  border: 1px solid #d8d6de;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  min-width: 100%;
  background: #ffffff !important;
`;

export const StyledButton = styled(Button)`
  width: 84px;
  height: 38px;
  background: #7890ff;
  border-radius: 0px 6px 6px 0px;
  min-width: 32%;
  color: #ffffff;
  font-size: 14px;
  font-weight: 100;
`;
