import { configureStore } from '@reduxjs/toolkit';
import { authUserReducer } from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import leaderboardsReducer from './leaderBoard/reducer';
import threadReducer from './threads/reducer';
import threadDetailReducer from './threadDetails/reducer';
import usersReducer from './users/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
    threads: threadReducer,
    leaderboards: leaderboardsReducer,
    threadDetail: threadDetailReducer,

  },
});

export default store;