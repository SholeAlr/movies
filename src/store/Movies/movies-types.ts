import { Artist } from '../../@types/global.type'

export type MovieItemResponse = {
  id: number
  title: string
  year: number
  director: Artist
  actors: Artist[]
}

export type MoviesListResponse = MovieItemResponse[]

export type MoviesInitialState = {
  movies: {
    moviesLoading: boolean
    moviesList?: MoviesListResponse
  }
  movieDetail: {
    movieDetailLoading: boolean
    movieDetailData?: MovieItemResponse
  }
}
