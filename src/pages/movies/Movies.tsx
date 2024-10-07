import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/useStore'
import { getMoviesList } from '../../store/Movies/movies-extra-reducers'

export const Movies = () => {
  const { moviesList } = useAppSelector((state) => state.movies.movies)

  const dispatch = useAppDispatch()
  useEffect(() => {
    console.log(moviesList)
    dispatch(getMoviesList())
  }, [])
  return <div>Movies</div>
}
