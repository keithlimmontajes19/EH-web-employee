import styled from 'styled-components';

export const Container = styled.div``;
export const MainContainer = styled.div`
  width: 105px;
  height: 105px;
  margin-top: 25px;
  margin-left: 25px;
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 5px 20px rgba(43, 46, 74, 0.2);
`;

export const TextStyled = styled.a`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #2b2e4a;
  opacity: 0.5;
  padding-top: 27px;
`;

export const TextContainer = styled.div`
  padding: 27;
  margin-top: 27px;
  margin-left: 20px;
`;

export const FolderContainer: any = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: 36,
};

export const NameContainer: any = {
  width: 120,
  marginLeft: 18,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
};

export const NameStyled = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #000000;
  text-align: center;
  margin-top: 10px;
`;
