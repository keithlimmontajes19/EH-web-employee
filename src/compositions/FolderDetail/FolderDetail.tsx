import {ReactElement, useState} from 'react';
import type {PropsType} from './types';

import {Row, Col} from 'antd';
import {MainContainer, TextStyled, TextContainer} from './styled';

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
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            <MainContainer>
              <div
                style={{
                  marginLeft: '35%',
                  marginRight: '50%',
                  marginTop: '30%',
                  justifyContent: 'center',
                }}>
                <IconImage source={FOLDER} height={33} width={33} />
              </div>
            </MainContainer>
            <span
              style={{
                textAlign: 'center',
                marginLeft: 40,
              }}>
              {item?.item_name}
            </span>
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
