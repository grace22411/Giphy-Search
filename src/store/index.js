import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import { giphySlice } from './slices/giphy'

const preloadedState = localStorage.getItem('preloadedState')
  ? JSON.parse(localStorage.getItem('preloadedState'))
  : {}

const store = configureStore({
  reducer: {
    giphy: giphySlice.reducer
  },
  middleware: [...getDefaultMiddleware()],
  preloadedState
})

store.subscribe(() =>
  localStorage.setItem('preloadedState', JSON.stringify(store.getState()))
)

export default store
