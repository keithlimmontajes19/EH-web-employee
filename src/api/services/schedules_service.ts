import api from '../index';
import {SCHEDULES} from '../constants';

const schedules_service = {
  getSchedules: (userID: string) => api.get(`/users/${userID}${SCHEDULES}`),
};

export default schedules_service;
