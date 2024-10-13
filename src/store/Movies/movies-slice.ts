/* eslint-disable camelcase */
import {
  ActionReducerMapBuilder,
  PayloadAction,
  createSlice,
} from '@reduxjs/toolkit'
import { initialState } from './movies-initialState'
import moviesReducers from './movies-reducers'
import { getMoviesList } from './movies-extra-reducers'
import { MoviesInitialState, MoviesListResponse } from './movies-types'

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: moviesReducers,
  extraReducers: (builder: ActionReducerMapBuilder<MoviesInitialState>) => {
    // Get Movies

    builder
      .addCase(getMoviesList.pending, (state) => {
        state.movies.moviesLoading = true
      })
      .addCase(
        getMoviesList.fulfilled,
        (state, { payload }: PayloadAction<MoviesListResponse>) => {
          const newData = [...payload]

          state.movies.moviesLoading = false
          state.movies.moviesList = newData
        },
      )
      .addCase(getMoviesList.rejected, (state) => {
        state.movies.moviesLoading = false
      })
  },
})

export const {} = movieSlice.actions

export default movieSlice.reducer
