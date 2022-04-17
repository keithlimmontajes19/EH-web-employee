import {Fragment, ReactElement, useEffect} from 'react';

/* components */
import LearnMaincourse from 'compositions/LearnMaincourse';
import LearnCurriculum from 'compositions/LearnCurriculum';

/* recuer action */
import {getMyCourses} from 'ducks/lms/actionCreator';

const Learn = (): ReactElement => {
  useEffect(() => {
    getMyCourses();
  }, []);

  return (
    <Fragment>
      <LearnCurriculum />
      <LearnMaincourse />
    </Fragment>
  );
};

export default Learn;
