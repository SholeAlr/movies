import { MoviesListResponse } from './movies-types'

export const initMoviesListData: MoviesListResponse = {
  queryResult: [],
  pageNumber: 1,
  pageSize: 10,
  totalLength: 1,
  flagDataResponse: true,
}

export const initialState = {
  movies: {
    moviesLoading: false,
    moviesList: initMoviesListData,
  },
}
