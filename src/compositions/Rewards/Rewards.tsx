import {ReactElement} from 'react';

import {
  SubTitle,
  CoinText,
  MedalText,
  Container,
  Leaderboard,
  ButtonStyled,
  TextContainer,
  CoinsContainer,
  MedalContainer,
  ContainerStyles,
} from './styled';
import {Col, Row, Table} from 'antd';

/* reducer action */
import {RootState} from 'ducks/store';
import {useSelector} from 'react-redux';

import IconImage from 'components/IconImage';
import COIN_LOGO from 'assets/icons/coin-icon.png';
import MEDAL_LOGO from 'assets/icons/medal-icon.png';

import {columns} from './columns';

const Rewards = (): ReactElement => {
  const rewards: any = useSelector<RootState>((state) => state.rewards);
  const users: any = useSelector<RootState>((state) => state.authentication);
  const userRewards = users?.user_details?.data?.rewards;

  return (
    <div style={ContainerStyles}>
      <div>
        <Row>
          <Col span={10}>
            <CoinsContainer>
              <Row>
                <IconImage source={COIN_LOGO} width={64} height={64} />
                <CoinText>
                  {userRewards?.points || 0}
                  <SubTitle>Point Count</SubTitle>
                </CoinText>
              </Row>
            </CoinsContainer>
          </Col>
          <Col span={10}>
            <MedalContainer>
              <Row>
                <IconImage source={MEDAL_LOGO} width={57} height={77} />
                <MedalText>
                  {(userRewards?.achievements || []).length}
                  <SubTitle>Point Count</SubTitle>
                </MedalText>
              </Row>
            </MedalContainer>
          </Col>
        </Row>

        <Col span={19}>
          <ButtonStyled>
            <TextContainer>Redeem Points</TextContainer>
          </ButtonStyled>
          <Container>
            <Leaderboard>Leaderboard</Leaderboard>
            <Table
              bordered={false}
              pagination={false}
              columns={columns}
              dataSource={rewards?.data || []}
            />
          </Container>
        </Col>
      </div>
    </div>
  );
};

export default Rewards;
