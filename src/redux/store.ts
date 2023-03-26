import { configureStore } from '@reduxjs/toolkit'

import newsReducer from './NewsLayoutSlice'

export const store = configureStore({
  reducer: {
    newsLayout: newsReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch