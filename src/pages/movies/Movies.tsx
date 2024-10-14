import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/useStore'
import { getMoviesList } from '../../store/Movies/movies-extra-reducers'
import { Cake } from 'iconsax-react'
import { useDeviceSize } from '../../hooks/useDeviceSize'
import { ActorsList } from './components/ActorsList'
import { Modal } from '../../components/Modal'

export const Movies = () => {
  const { moviesList, moviesLoading } = useAppSelector(
    (state) => state.movies.movies,
  )
  const { isMobile } = useDeviceSize()

  const [selectedMovieID, setSelectedMovieID] = useState<number | null>(null)

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getMoviesList())
  }, [])

  const toggleActorsListClick = (movieId: number) => {
    movieId === selectedMovieID
      ? setSelectedMovieID(null)
      : setSelectedMovieID(movieId)
  }

  return (
    <>
      <div className='text-white h-full overflow-y-scroll pb-10'>
        {!moviesLoading && moviesList?.length ? (
          <div className='flex flex-col gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3'>
            {moviesList.map((eachMovie) => (
              <div
                key={eachMovie.id}
                className='border flex flex-col items-center'
              >
                {/* movie title */}
                <div className='border-b w-full p-2 bg-red-500'>
                  <h2 className='text-3xl text-center'>{eachMovie.title}</h2>
                  <p className='text-center'>Year: {eachMovie.year}</p>
                </div>

                {/* director info */}
                <div className='w-full flex text-lg gap-x-2 px-2 py-4'>
                  <div>Director:</div>
                  <div>
                    <p>
                      {eachMovie.director.name}, {eachMovie.director.country}
                    </p>
                    <div className='flex gap-x-2 items-center mt-2'>
                      <Cake color='#FF8A65' className='size-4' />
                      <p className='text-sm'>{eachMovie.director.birth_date}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleActorsListClick(eachMovie.id)}
                    className='border rounded-lg p-2 ml-auto'
                  >
                    Actors
                  </button>
                </div>

                {/* actors */}
                {selectedMovieID === eachMovie.id && isMobile ? (
                  <div className='w-full flex gap-x-4 mt-4 px-2 pb-6'>
                    <p>Actors: </p>
                    <ActorsList actors={eachMovie.actors} />
                  </div>
                ) : null}

                <Modal
                  open={selectedMovieID === eachMovie.id && !isMobile}
                  onClose={() => toggleActorsListClick(eachMovie.id)}
                >
                  <ActorsList actors={eachMovie.actors} />
                </Modal>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </>
  )
}
