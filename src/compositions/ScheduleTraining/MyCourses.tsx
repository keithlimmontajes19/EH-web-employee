import {ReactElement, useEffect, useState} from 'react';

import {Col} from 'antd';
import {columns} from './columns';
import {Container, StyledTable} from './styled';

import NO_COURSES from 'assets/icons/no-courses-icon.png';
import schedules_service from 'api/services/schedules_service';

const ScheduleTraining = (): ReactElement => {
  const [schedules, setShecdules] = useState([]);

  const callingSchedules = async () => {
    const userID = localStorage.getItem('userId');

    try {
      const response = await schedules_service.getSchedules(userID);

      console.log(response);

      setShecdules(response?.data?.data);
      return Promise.resolve();
    } catch (err) {
      setShecdules([]);
      return Promise.reject(err);
    }
  };

  useEffect(() => {
    callingSchedules();
  }, []);

  return (
    <Col span={9}>
      <Container>
        <StyledTable
          size="small"
          bordered={false}
          pagination={false}
          dataSource={schedules}
          columns={columns()}
          locale={{
            emptyText: (
              <div style={{padding: 100}}>
                <img
                  src={NO_COURSES}
                  style={{
                    height: 100,
                    width: 100,
                  }}
                />
                <p>No result found.</p>
              </div>
            ),
          }}
        />
      </Container>
    </Col>
  );
};

export {ScheduleTraining};
