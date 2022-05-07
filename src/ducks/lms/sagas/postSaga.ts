import {takeLatest, put, call} from 'redux-saga/effects';
import {TYPES} from '../actionTypes';

import lms_service from 'api/services/lms_service';
// import LocalStorage from '@react-native-async-storage/async-storage';

export const quizId = async () => await localStorage.getItem('quizId');
export const topicId = async () => await localStorage.getItem('topicId');
export const courseId = async () => await localStorage.getItem('courseId');
export const lessonId = async () => await localStorage.getItem('lessonId');

export const organizationId = async () =>
  await localStorage.getItem('organizationId');

export function* postNextProgress({payload}: any): any {
  const idTopic = yield call(topicId);
  const idCourse = yield call(courseId);

  const data = {
    ...payload,
    course: idCourse,
    courseItem: idTopic,
  };

  try {
    const response = yield call(lms_service.patchProgress, data);
    yield put({
      type: TYPES.POST_NEXT_LESSON_SUCCESS,
      payload: response?.data?.data,
    });

    return Promise.resolve(response);
  } catch (error) {
    yield put({
      type: TYPES.POST_NEXT_LESSON_FAILED,
    });

    return Promise.reject(error);
  }
}

export function* postQuizResults({payload}: any): any {
  const idTopic = yield call(topicId);
  const idCourse = yield call(courseId);
  const idLesson = yield call(lessonId);
  const idOrg = yield call(organizationId);

  try {
    const response = yield call(
      lms_service.postQuizResults,
      {timeFinished: payload},
      idTopic,
      idCourse,
      idLesson,
      idOrg,
    );

    yield put({
      type: TYPES.POST_QUIZ_SUCCESS,
      payload: response?.data,
    });

    return Promise.resolve(response);
  } catch (error) {
    yield put({
      type: TYPES.POST_QUIZ_FAILED,
    });
    return Promise.reject(error);
  }
}

export default function* watcher() {
  yield takeLatest(TYPES.POST_QUIZ_REQUEST, postQuizResults);
  yield takeLatest(TYPES.POST_NEXT_LESSON_REQUEST, postNextProgress);
}
