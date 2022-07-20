import {combineReducers} from 'redux';

import {apiSlice} from './api/apiSlice';
import {authSliceReducer} from './auth/authSlice';

import lms from './lms/reducer';
import team from './teams/reducer';
import alert from './alert/reducer';
import rewards from './leaderboard/reducer';
import dashboard from './dashboard/reducer';
import onboarding from './onboarding/reducer';
import announcement from './announcement/reducer';
import authentication from './authentication/reducer';

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authSliceReducer,
  lms,
  team,
  alert,
  rewards,
  dashboard,
  onboarding,
  announcement,
  authentication,
});

export default rootReducer;
