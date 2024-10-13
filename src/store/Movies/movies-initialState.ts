import { MoviesListResponse } from './movies-types'

export const initMoviesListData: MoviesListResponse = [
  {
    id: 0,
    title: 'movie1',
    year: 1994,
    director: {
      id: 1,
      name: 'John Doe',
      country: 'IR',
      birth_date: '1994',
    },
    actors: [
      {
        id: 1,
        name: 'JaneDoe',
        country: 'IR',
        birth_date: '1996',
      },
    ],
  },
]

export const initialState = {
  movies: {
    moviesLoading: false,
    moviesList: initMoviesListData,
  },
}
