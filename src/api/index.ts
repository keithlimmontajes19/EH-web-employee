import axios from 'axios';
import {store} from 'ducks/store';
import {openNotification} from 'ducks/alert/actionCreator';

/**
 * ===================================
 * AXIOS CONFIGURATION
 * ===================================
 */

const config = {
  baseURL: 'https://engage-hub-platform-dev.herokuapp.com/api/v1',
  headers: {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json; charset=utf-8',
  },
  timeout: 100000,
};

/**
 * ===================================
 * END OF AXIOS CONFIGURATION
 * ===================================
 */

export const axiosInstance = axios.create(config);
export const accessToken = localStorage.getItem('accessToken');

axiosInstance.interceptors.request.use(
  async (requestConfig) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      requestConfig.headers.Authorization = `Bearer ${accessToken}`;
    } else {
      requestConfig.headers.Authorization = '';
    }

    return requestConfig;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  async (requestConfig) => requestConfig,
  async function (error) {
    if (
      error?.response?.status === 401 &&
      error?.response?.config &&
      !error?.response?.config.__isRetryRequest
    ) {
      store.dispatch({type: 'GET_AUTHENTICATION_FAILED'});
      // store.dispatch(
      //   openNotification({
      //     onShow: true,
      //     type: 'warning',
      //     message: 'Session has Expired!',
      //   }),
      // );

      localStorage.clear();
      return error;
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
