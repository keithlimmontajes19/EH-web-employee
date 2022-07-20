import {ReactElement} from 'react';
import {useNavigate} from 'react-router-dom';

import {Row} from 'antd';
import {ICONS_HOMESCREEN} from './data';
import {Container, SubContainer, TextStyled} from './styled';

import IconImage from 'components/IconImage';

const Leaderboard = (): ReactElement => {
  const navigate = useNavigate();

  return (
    <Container>
      <Row gutter={16}>
        {ICONS_HOMESCREEN.map((item) => {
          return (
            <SubContainer
              key={item?.title}
              onClick={() => navigate(item?.url)}>
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
