import { configureStore } from '@reduxjs/toolkit';

import createSagaMiddleware from 'redux-saga';
import rootReducers from './rootReducer';
import rootSaga from './rootSaga';
import {apiSlice} from './api/apiSlice';

import { persistStore, persistReducer, createMigrate } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const migrations = {
  1: (state) => {
    return {
      ...state
    }
  }
}

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  migrate: createMigrate(migrations, { debug: false }),
  whitelist: ['/', 'login']
}

const persistedReducer = persistReducer(persistConfig, rootReducers);
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, apiSlice.middleware];

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(middlewares)
})

const persist = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persist };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
