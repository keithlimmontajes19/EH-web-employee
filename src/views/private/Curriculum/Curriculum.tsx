import React, {ReactElement, useEffect} from 'react';
import {Row, Col} from 'antd';

/* composition */
import SidebarCurriculum from 'compositions/SidebarCurriculum';
import ContentCurriculum from 'compositions/ContentCurriculum';

/* reducer action */
import {RootState} from 'ducks/store';
import {useDispatch, useSelector} from 'react-redux';
import {getLessons} from 'ducks/lms/actionCreator';

import Loading from 'components/Loading';
const Curriculum = (): ReactElement => {
  const dispatch = useDispatch();
  const {lesson, curriculum}: any = useSelector<RootState>(
    (state) => state.lms,
  );

  useEffect(() => {
    dispatch(getLessons());
  }, []);

  const content = (
    <Row gutter={16}>
      <Col span={7} style={{marginTop: -20, marginLeft: -20}}>
        <SidebarCurriculum lesson={lesson} />
      </Col>
      <Col span={17}>
        <ContentCurriculum curriculum={curriculum} />
      </Col>
    </Row>
  );

  return lesson?.loading ? <Loading /> : content;
};

export default Curriculum;
