import React, {ReactElement} from 'react';
import type {PropsType} from './types';

import {DUMMY_DATA} from './data';
import {FlexRow, FlexContainer} from './styled';

/* components */
import Label from 'components/Label';
import MainCourseList from 'compositions/MainCourseList';

const LearnMaincourse = (props: PropsType): ReactElement => {
  const {isRating = true} = props;
  return (
    <>
      <FlexRow>
        <FlexContainer>
          <Label size={18} bold="bold">
            Main Courses
          </Label>
        </FlexContainer>
      </FlexRow>

      <MainCourseList items={DUMMY_DATA} isRating={isRating} />
    </>
  );
};

export default LearnMaincourse;
