import {TYPES} from './actionTypes';

export const getFolders = () => ({
  type: TYPES.LIST_FOLDERS_REQUEST,
});

export const getPages = () => ({
  type: TYPES.LIST_PAGES_REQUEST,
});

export const getOneFolder = (payload: string) => ({
  type: TYPES.GET_ONE_FOLDER_REQUEST,
  payload,
});

export const getPageDetails = (payload: any) => ({
  type: TYPES.GET_PAGE_DETAILS_REQUEST,
  payload,
});

export const postQuizAction = (payload: any) => ({
  type: TYPES.POST_QUIZ_SURVEY_REQUEST,
  payload,
});

export const postQuizRemove = () => ({
  type: TYPES.POST_QUIZ_SURVEY_FAILED,
});

export const getOneQuiz = (payload: any) => ({
  type: TYPES.GET_ONE_QUIZ_SURVEY_REQUEST,
  payload,
});
