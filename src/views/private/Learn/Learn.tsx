// import {Fragment, ReactElement} from 'react';

// /* components */
// import LearnMaincourse from 'compositions/LearnMaincourse';
// import LearnCurriculum from 'compositions/LearnCurriculum';

// /* recuer action */
// import {RootState} from 'ducks/store';
// import {useSelector} from 'react-redux';

// const Learn = (): ReactElement => {
//   // const {loading}: any = useSelector<RootState>((state) => state.lms);

//   /*** deprecated
//   const content = (
//     <Fragment>
//       <LearnCurriculum />
//       <LearnMaincourse />
//     </Fragment>
//   );
//   ***/


//   return <Loading />
//   // return 1 === 1 ? <Loading /> : content;
// };

import {MyCourses} from 'compositions/MyCourses'
import {MainCourses} from 'compositions/MainCourses'

export default function Learn() {
  return <>
    <MyCourses />
    <MainCourses />
  </>
}
