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

  useEffect(() => {
    dispatch(getLessons());
  }, []);

  const {lesson}: any = useSelector<RootState>((state) => state.lms);

  const [selected, setSelected] = useState('1');
  const [lessonIndex, setLessonIndex] = useState<string | number>(-1);

  const content = (
    <Row>
      <Col span={5} style={{marginTop: -20, marginLeft: -20}}>
        <SidebarCurriculum
          lesson={lesson}
          selected={selected}
          setSelected={setSelected}
          lessonIndex={lessonIndex}
          setLessonIndex={setLessonIndex}
        />
      </Col>
      <Col span={19} style={{background: '#fff', marginTop: -20}}>
        <ContentCurriculum
          selected={selected}
          setSelected={setSelected}
          lessonIndex={lessonIndex}
          setLessonIndex={setLessonIndex}
        />
      </Col>
    </Row>
  );

  return lesson?.loading ? <Loading /> : content;
};

export default Curriculum;
