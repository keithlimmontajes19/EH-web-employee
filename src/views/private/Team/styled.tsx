import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 40%;
  margin-right: 40%;
  margin-top: 20%;
`;

export const CardStyled = styled.div`
  width: 547px;
  height: 452px;
  padding: 24px;
  background: #e0dffe;
  border-radius: 25px;
  box-shadow: 0px 5px 20px -5px rgba(43, 46, 74, 0.2);
`;

export const LabelStyled = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  text-align: center;
  color: #2b2e4a;
  opacity: 0.5;
  margin-left: 30%;
  margin-right: 30%;
  margin-top: 200px;
`;

export const CardFolders = styled.div`
  width: 547px;
  min-height: 452px;
  margin-top: 42px;
  margin-right: 42px;
  background: #fff;
  border-radius: 25px;
  box-shadow: 0px 5px 20px -5px rgba(43, 46, 74, 0.2);
`;

export const FlexWrap = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const TitleHeader = styled.div`
  width: 100%;
  height: 76px;
  background: #e0dffe;
  border-radius: 25px 25px 0px 0px;
  padding: 24px;
  display: flex;
  flex-direction: row;
`;

export const TitleLabel = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #2b2e4a;
  opacity: 0.8;
  flex: 1;
`;

export const FolderContainer = styled.div`
  height: 105px;
  width: 105px;
  bottom: 25.1%;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(10, 130, 0, 0.05);
  border-radius: 15px;
  margin-top: 32px;
  margin-left: 25px;
  align-self: center;
  justify-content: center;
  align-content: center;
  display: flex;
  flex-direction: column;
`;
