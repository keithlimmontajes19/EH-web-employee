import styled from 'styled-components';

export const Container = styled.div``;
export const TextStyled = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  text-align: center;
  color: #635ffa;
`;

export const SubText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  text-align: center;
  color: #000000;
  opacity: 0.8;
  margin-top: -20px;
`;

export const ButtonNextStyles = {
  width: 250,
  height: 48,
  color: '#635FFA',
  borderRadius: 8,
  fontSize: 16,
  fontWeight: 700,
};

export const ButtonBackStyles = {
  width: 250,
  height: 48,
  borderRadius: 8,
  fontSize: 16,
  fontWeight: 700,
  color: '#fff',
  border: 'none',
  background: '#635FFA',
};

export const ButtonContainer = styled.div`
  position: absolute;
  left: 70%;
  right: 4.38%;
  top: 75%;
  bottom: 4.59%;
  display: flex;
  flex-direction: row;
`;
