import {ReactElement} from 'react';

import type {PropsType} from './types';
import {
  Container,
  CoinsContainer,
  MedalContainer,
  ButtonStyled,
  TextContainer,
} from './styled';
import {Col, Row} from 'antd';

const Rewards = (props: PropsType): ReactElement => {
  return (
    <div style={{marginTop: 22}}>
      <Row>
        <Col span={8}>
          <CoinsContainer>sa</CoinsContainer>
        </Col>
        <Col span={10}>
          <MedalContainer>sa</MedalContainer>
        </Col>

        <Col span={19}>
          <ButtonStyled>
            <TextContainer>Redeem Points</TextContainer>
          </ButtonStyled>
          <Container></Container>
        </Col>
      </Row>
    </div>
  );
};

export default Rewards;
