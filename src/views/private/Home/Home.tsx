import {ReactElement, useEffect} from 'react';

import {useDispatch} from 'react-redux';

import {getMyCourses} from 'ducks/lms/actionCreator';
import {getDashboard} from 'ducks/dashboard/actionCreator';
import {getLeaderboards} from 'ducks/leaderboard/actionCreator';
import {getAnnouncements} from 'ducks/announcement/actionCreator';

import {Container, FlexWrap, SubContainer} from './styled';

import Label from 'components/Label';
import Rewards from 'compositions/Rewards';
import Leaderboard from 'compositions/Leaderboard';
import Announcement from 'compositions/Announcement';
import MainCourseList from 'compositions/MainCourseList';
import CarouselAnnouncement from 'compositions/CarouselAnnouncement';
import {MainCourses} from 'compositions/MainCourses';

import HomeHeader from './HomeHeader/HomeHeader';
import HomeInfo from './HomeInfo/HomeInfo';

const Home = (): ReactElement => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyCourses());
    dispatch(getDashboard());
    dispatch(getAnnouncements());
    dispatch(getLeaderboards());
  }, []);

  return (
    <Container>
      {/* <HomeHeader /> */}
      {/* <HomeInfo /> */}
      <FlexWrap>
        <SubContainer>
          <Leaderboard />
          <Label bottom={35} />
          <CarouselAnnouncement />
        </SubContainer>
        <Rewards />
      </FlexWrap>
      <SubContainer>
        <MainCourses />
      </SubContainer>
    </Container>
  );
};

export default Home;
