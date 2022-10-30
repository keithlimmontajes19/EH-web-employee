import {MyCourses} from 'compositions/MyCourses';
import {MainCourses} from 'compositions/MainCourses';
import {ScheduleTraining} from 'compositions/ScheduleTraining';
import {Row} from 'antd';

export default function Learn() {
  return (
    <>
      <Row>
        <MyCourses />
        <div style={{margin: 15}} />
        <ScheduleTraining />
      </Row>
      <MainCourses />
    </>
  );
}
