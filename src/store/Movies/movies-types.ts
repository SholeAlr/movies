import { Artist } from '../../@types/global.type'
import { GeneralResponse } from '../@types/general-response.type'

export type MovieItemResponse = {
  id: number
  title: string
  year: number
  director: Artist
  actors: Artist[]
}

export type MoviesListResponse = GeneralResponse & {
  queryResult: MovieItemResponse[]
}

export type MoviesInitialState = {
  movies: {
    moviesLoading: boolean
    moviesList?: MoviesListResponse
  }
}
