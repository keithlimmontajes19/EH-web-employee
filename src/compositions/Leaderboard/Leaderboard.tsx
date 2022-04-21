import {ReactElement} from 'react';

import {Row} from 'antd';
import {ICONS_HOMESCREEN} from './data';
import IconImage from 'components/IconImage';
import {Container, SubContainer, TextStyled} from './styled';

const Leaderboard = (): ReactElement => {
  return (
    <Container>
      <Row gutter={16}>
        {ICONS_HOMESCREEN.map((item) => {
          return (
            <SubContainer key={item?.title}>
              <div style={{marginLeft: 'auto', marginRight: 'auto'}}>
                <IconImage source={item?.icon} height={item?.height} />
              </div>
              <TextStyled>{item?.title}</TextStyled>
            </SubContainer>
          );
        })}
      </Row>
    </Container>
  );
};

export default Leaderboard;
