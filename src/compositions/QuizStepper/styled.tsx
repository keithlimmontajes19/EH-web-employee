import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: #635ffa;
  justify-content: center;
  padding: 96px;
`;

export const SubContainer = styled.div`
  width: 100%;
  min-height: 650px;
  padding: 27px 48px;
  background: #fff;
  border-radius: 25px;
  margin-top: auto;
  margin-bottom: auto;
  box-shadow: 0px 0px 5px 3px rgba(43, 46, 74, 0.2);
`;

export const TitleStyled = styled.p`
  line-height: 30px;
  font-weight: 700;
  font-size: 25px;
  color: #2b2e4a;
  opacity: 0.2;
`;

export const QuestionStyled = styled.p`
  font-style: normal;
  line-height: 28px;
  font-weight: 700;
  font-size: 22px;
  color: #635ffa;
`;

export const ButtonNextStyles = {
  width: 168,
  height: 48,
  color: '#635FFA',
  borderRadius: 8,
  fontSize: 16,
  fontWeight: 700,
};

export const ButtonBackStyles = {
  width: 168,
  height: 48,
  borderRadius: 8,
  fontSize: 16,
  fontWeight: 700,
  color: '#fff',
  border: 'none',
  background: '#635FFA',
};
