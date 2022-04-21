import React, {Fragment} from 'react';
import type {PropsType} from './types';
import {useHistory} from 'react-router-dom';

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
  const history = useHistory();

  return (
    <Fragment>
      {(data || []).map((item: any) => {
        return (
          <Row>
            <Col span={20}>
              <div
                onClick={() => {
                  dispatch(getPageDetails(item));
                  history.push('/team/detail');
                }}
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
                    <IconImage
                      width={33}
                      height={41}
                      source={item?.type ? QUIZ : PAGE}
                    />
                  </div>
                </MainContainer>
                <p
                  style={{
                    textAlign: 'center',
                    marginLeft: 30,
                  }}>
                  {item?.title}
                </p>
              </div>
            </Col>
          </Row>
        );
      })}
    </Fragment>
  );
};

export default PagesDetail;
