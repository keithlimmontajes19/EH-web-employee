import {takeLatest, put, call} from 'redux-saga/effects';

import {TYPES} from '../actionTypes';
import {TYPES as ALERT_TYPES} from 'ducks/alert/actionTypes';
import team_service from 'api/services/team_service';

export function* postQuizSurvey({payload}: any): any {
  try {
    const response = yield call(team_service.postQuiz, payload);
    yield put({
      type: TYPES.POST_QUIZ_SURVEY_SUCCESS,
      payload: response?.data,
      modalShow: true,
    });

    return Promise.resolve(response);
  } catch (error) {
    yield put({
      type: TYPES.POST_QUIZ_SURVEY_FAILED,
      modalShow: false,
    });

    yield put({
      type: ALERT_TYPES.ALERT_NOTIFICATION_REQUEST,
      payload: {
        type: '',
        onShow: true,
        message: 'Please try again later.',
      },
    });

    return Promise.reject(error);
  }
}

export default function* watcher() {
  yield takeLatest(TYPES.POST_QUIZ_SURVEY_REQUEST, postQuizSurvey);
}
