import {ReactElement, useEffect} from 'react';

import {Container} from './styled';
import {Row, Col} from 'antd';

import {getMyCourses} from 'ducks/lms/actionCreator';
import {useDispatch} from 'react-redux';
import {getAnnouncements} from 'ducks/announcement/actionCreator';

import Label from 'components/Label';
import Rewards from 'compositions/Rewards';
import Leaderboard from 'compositions/Leaderboard';
import Announcement from 'compositions/Announcement';
import MainCourseList from 'compositions/MainCourseList';

const Home = (): ReactElement => {
  const dispatch = useDispatch();

  useEffect(() => {
    getMyCourses();
    dispatch(getAnnouncements());
  }, []);

  return (
    <Container>
      <Row gutter={16} style={{padding: 20}}>
        <Col span={10}>
          <Leaderboard />
          <Label bottom={35} />
          <Announcement />
        </Col>
        <Col span={12}>
          <Rewards />
        </Col>
      </Row>

      <Label size={25} bold="bold" bottom={20} left={20}>
        Main Courses
      </Label>

      <MainCourseList />
    </Container>
  );
};

export default Home;
