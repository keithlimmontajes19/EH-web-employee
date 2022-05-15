import api from '../index';
import {PAGES, FOLDERS, QUIZ_SURVEY} from '../constants';

const auth_services = {
  getFolders: () => api.get(`${FOLDERS}`),
  getOneFolder: (folderID: string) => api.get(`${FOLDERS}/${folderID}`),
  getPages: () => api.get(`${PAGES}`),
  getOnePage: (pageID: string) => api.get(`${PAGES}/${pageID}`),

  getOneQuiz: (formId: string) => api.get(`${QUIZ_SURVEY}/${formId}`),
  postQuiz: (payload: any) => api.post(`${QUIZ_SURVEY}/create`, payload),
};

export default auth_services;
