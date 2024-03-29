import React, {Fragment} from 'react';
import type {PropsType} from './types';
import {useNavigate} from 'react-router-dom';

import {
  NameStyled,
  NameContainer,
  FolderContainer,
} from 'compositions/FolderDetail/styled';
import {Row, Col} from 'antd';
import {MainContainer} from './styled';

import PAGE from 'assets/icons/page.png';
import QUIZ from 'assets/icons/quiz-icon.png';
import IconImage from 'components/IconImage';

/* reducer action */
import {useDispatch} from 'react-redux';
import {getPageDetails} from 'ducks/teams/actionCreator';

const PagesDetail = ({data}: PropsType): any => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const renderItem = (item) => {
    return (
      <Row>
        <Col span={20}>
          <div
            onClick={() => {
              navigate('/team/detail');
              dispatch(getPageDetails(item));
            }}
            style={{
              width: 120,
              display: 'flex',
              flexDirection: 'column',
            }}>
            <MainContainer>
              <div style={FolderContainer}>
                <IconImage
                  width={33}
                  height={41}
                  source={
                    item?.type || item?.item_type === 'page' ? PAGE : QUIZ
                  }
                />
              </div>
            </MainContainer>

            <div style={NameContainer}>
              <NameStyled>{item?.title || item?.item_name}</NameStyled>
            </div>
          </div>
        </Col>
      </Row>
    );
  };

  return (
    <Fragment>
      {Array.isArray(data)
        ? (data || []).map((item) => renderItem(item))
        : renderItem(data)}
    </Fragment>
  );
};

export default PagesDetail;
