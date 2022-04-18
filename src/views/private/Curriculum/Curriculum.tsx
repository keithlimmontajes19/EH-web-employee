import {ReactElement} from 'react';

import type {PropsType} from './types';
import {MenuContainer} from './styled';
import {Row, Col} from 'antd';

const Curriculum = (props: PropsType): ReactElement => {
  return (
    <Row gutter={16}>
      <Col span={5} style={{marginTop: -20, marginLeft: -20}}>
        <MenuContainer>
          <p>sample</p>
        </MenuContainer>
      </Col>
      <Col span={17}>added new</Col>
    </Row>
  );
};

export default Curriculum;
