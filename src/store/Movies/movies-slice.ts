/* eslint-disable camelcase */
import {
  ActionReducerMapBuilder,
  PayloadAction,
  createSlice,
} from '@reduxjs/toolkit'
import { initialState } from './movies-initialState'
import moviesReducers from './movies-reducers'
import { getMoviesDetailById, getMoviesList } from './movies-extra-reducers'
import {
  MovieItemResponse,
  MoviesInitialState,
  MoviesListResponse,
} from './movies-types'

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

    // Get Movie by ID
    builder
      .addCase(getMoviesDetailById.pending, (state) => {
        state.movieDetail.movieDetailLoading = true
      })
      .addCase(
        getMoviesDetailById.fulfilled,
        (state, { payload }: PayloadAction<any>) => {
          state.movieDetail.movieDetailLoading = false
          state.movieDetail.movieDetailData = payload
        },
      )
      .addCase(getMoviesDetailById.rejected, (state) => {
        state.movieDetail.movieDetailLoading = false
      })
  },
})

export const {} = movieSlice.actions

export default movieSlice.reducer
