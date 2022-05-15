import {ReactElement} from 'react';

import {Spin} from 'antd';
import {Container} from './styled';
import {LoadingOutlined} from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{fontSize: 40}} spin />;

const Loading = (): ReactElement => {
  return (
    <Container>
      <Spin size="large" indicator={antIcon} />
    </Container>
  );
};

export default Loading;
