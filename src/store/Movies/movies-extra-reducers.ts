import { createAsyncThunk } from '@reduxjs/toolkit'
import { MovieItemResponse, MoviesListResponse } from './movies-types'
import { AppApi } from '../../service/api'
import { MoviesUrls } from './movies-url'

// Get all movies
export const getMoviesList = createAsyncThunk<MoviesListResponse>(
  '/api/movies/',
  async () => {
    try {
      const response = await AppApi.get(MoviesUrls.GetMoviesList)
        .then((res: any) => {
          if (res.status === 200) {
            return res.data
          }
        })
        .catch((error: Error) => {
          return error
        })
      return response
    } catch (error) {
      return error
    }
  },
)

// Get movie by id
export const getMoviesDetailById = createAsyncThunk<
  void,
  { data: any; movieId: number }
>('/api/movies/:movieId', async ({ data, movieId }, { rejectWithValue }) => {
  try {
    const url = `${MoviesUrls.GetMoviesDetail}/${movieId}`
    const response = await AppApi.post(url, data)
      .then((res: any) => {
        if (res.status === 200) {
          return res.data
        }
      })
      .catch((error: Error) => {
        return rejectWithValue(error)
      })
    return response
  } catch (error) {
    return rejectWithValue(error)
  }
})
