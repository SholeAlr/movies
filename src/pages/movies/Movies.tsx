import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/useStore'
import { getMoviesList } from '../../store/Movies/movies-extra-reducers'

export const Movies = () => {
  const { moviesList } = useAppSelector((state) => state.movies.movies)

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getMoviesList())
  }, [])
  console.log(moviesList)
  return <div>Movies</div>
}
