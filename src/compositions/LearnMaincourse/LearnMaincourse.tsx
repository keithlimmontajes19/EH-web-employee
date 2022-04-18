import React, {ReactElement} from 'react';
import type {PropsType} from './types';

import {DUMMY_DATA} from './data';
import {FlexRow, FlexContainer} from './styled';

/* components */
import Label from 'components/Label';
import MainCourseList from 'compositions/MainCourseList';

/* recuer action */
import {RootState} from 'ducks/store';
import {useSelector} from 'react-redux';

const LearnMaincourse = (props: PropsType): ReactElement => {
  const {isRating = true} = props;
  const {myCourses}: any = useSelector<RootState>((state) => state.lms);

  return (
    <>
      <FlexRow>
        <FlexContainer>
          <Label size={18} bold="bold">
            Main Courses
          </Label>
        </FlexContainer>
      </FlexRow>

      <MainCourseList items={myCourses} isRating={isRating} />
    </>
  );
};

export default LearnMaincourse;
