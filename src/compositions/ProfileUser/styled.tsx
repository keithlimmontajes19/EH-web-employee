import styled from 'styled-components';

export const FlexContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RowContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const UploadContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: right;
  margin-top: 50px;
  margin-bottom: 10px;
  margin-right: 10px;
`;

export const StyledText = styled.p`
  color: #4c4b7b;
  font-size: 25px;
  font-weight: 700;
  line-height: 30px;
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const StyledInput = styled.input`
  height: 48px;
  opacity: 0.5;
  width: 410px;
  padding: 10px;
  border-radius: 16px;
  background: #ffffff;
  box-sizing: border-box;
  border: 1px solid #635ffa;
`;

export const StyledLabel = styled.p`
  color: #4c4b7b;
  font-size: 14px;
  font-weight: 400;
  line-height: 100%;
  margin-top: 38px;
  margin-left: -320px;
  margin-bottom: 17px;
`;

export const StyledSave = styled.button`
  width: 166px;
  height: 48px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  border-radius: 8px;
  background: linear-gradient(90deg, #ab70f1 2.6%, #635ffa 47.4%, #4ab9e7 100%);
  border: none;
`;

export const StyledCancel = styled.button`
  border: none;
  color: #635ffa;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  text-align: right;
  margin-right: 20px;
  background: transparent;
`;
