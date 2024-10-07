import { createAsyncThunk } from '@reduxjs/toolkit'
import { MoviesListResponse } from './movies-types'
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
export const getMoviesDetail = createAsyncThunk<
  MoviesListResponse,
  { data: any }
>('/api/movies/:id/', async ({ data }, { rejectWithValue }) => {
  try {
    const response = await AppApi.post(MoviesUrls.GetMoviesDetail, data)
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
