import React, {ReactElement, useEffect, useState} from 'react';
import {Row, Col} from 'antd';

/* composition */
import Loading from 'components/Loading';
import SidebarCurriculum from 'compositions/SidebarCurriculum';
import ContentCurriculum from 'compositions/ContentCurriculum';

/* reducer action */
import {RootState} from 'ducks/store';
import {useDispatch, useSelector} from 'react-redux';
import {getLessons} from 'ducks/lms/actionCreator';

const Curriculum = (): ReactElement => {
  const dispatch = useDispatch();
  const {lesson}: any = useSelector<RootState>((state) => state.lms);

  useEffect(() => {
    dispatch(getLessons());
  }, []);

  const content = (
    <Row>
      <Col span={7} style={{marginTop: -20, marginLeft: -20}}>
        <SidebarCurriculum lesson={lesson} />
      </Col>
      <Col span={17} style={{background: '#fff', marginTop: -20}}>
        <ContentCurriculum />
      </Col>
    </Row>
  );

  return lesson?.loading ? <Loading /> : content;
};

export default Curriculum;
