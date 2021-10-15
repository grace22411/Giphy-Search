import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const giphySlice = createSlice({
  name: 'giphy',
  initialState: {
    searchResults: [],
    detail: null,
    isLoadingSearchResults: false,
    isLoadingDetail: false,
    error: null
  },
  reducers: {
    searchResultsLoading: (state, action) => {
      state.isLoadingSearchResults = action.payload
    },
    searchResultsSuccess: (state, action) => {
      state.searchResults = action.payload
    },
    searchResultsFailed: (state, action) => {
      state.error = action.payload
    },
    fetchDetailLoading: (state, action) => {
      state.isLoadingDetail = action.payload
    },
    fetchDetailSuccess: (state, action) => {
      state.detail = action.payload
    },
    fetchDetailFailed: (state, action) => {
      state.error = action.payload
    }
  }
})

export const {
  searchResultsLoading,
  searchResultsSuccess,
  searchResultsFailed,
  fetchDetailLoading,
  fetchDetailSuccess,
  fetchDetailFailed
} = giphySlice.actions
// export const giphySelector = (state: { giphy }) => state.giphy;

export const searchGiphyByKeyword = keyword => async dispatch => {
  dispatch(searchResultsLoading(true))
  await axios
    .get(
      `https://api.giphy.com/v1/gifs/search?api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc&q=${keyword}&limit=20`
    )
    .then(res => {
      const data = res.data.data
      console.log(data)
      dispatch(searchResultsSuccess(data))
    })
    .catch(err => {
      dispatch(searchResultsFailed(err.response.data))
    })
  dispatch(searchResultsLoading(false))
}

export const getSingleGiphyByID = gif_id => async dispatch => {
  dispatch(fetchDetailLoading(true))
  await axios
    .get(
      `https://api.giphy.com/v1/gifs/${gif_id}?api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc&q`
    )
    .then(res => {
      const data = res.data.data
      dispatch(fetchDetailSuccess(data))
    })
    .catch(err => {
      dispatch(fetchDetailFailed(err.response.data))
    })
  dispatch(fetchDetailLoading(false))
}

export const clearSearch = () => async dispatch => {
  dispatch(searchResultsSuccess([]))
}
