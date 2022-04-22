import {ReactElement, useState} from 'react';
import type {PropsType} from './types';

import {Row, Col} from 'antd';
import {
  TextStyled,
  NameStyled,
  MainContainer,
  TextContainer,
  NameContainer,
  FolderContainer,
} from './styled';

import IconImage from 'components/IconImage';
import FOLDER from 'assets/icons/folder-icon.png';
import PagesDetail from 'compositions/PagesDetail';

const FolderDetail = ({item}: PropsType): ReactElement => {
  const [active, setActive] = useState('folder');

  const Folders = () => (
    <div onClick={() => setActive('page')}>
      <Row>
        <Col span={20}>
          <div
            style={{
              width: 120,
              display: 'flex',
              flexDirection: 'column',
            }}>
            <MainContainer>
              <div style={FolderContainer}>
                <IconImage source={FOLDER} height={33} width={41} />
              </div>
            </MainContainer>

            <div style={NameContainer}>
              <NameStyled>{item?.item_name}</NameStyled>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );

  const text = `< Back to ${item?.item_name}`;
  const Pages = () => (
    <div>
      <TextContainer>
        <TextStyled onClick={() => setActive('folder')}>{text}</TextStyled>
      </TextContainer>

      <PagesDetail data={item?.item_pages} />
    </div>
  );

  return active === 'folder' ? Folders() : Pages();
};

export default FolderDetail;
