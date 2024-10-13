import { Cake } from 'iconsax-react'
import React, { FC } from 'react'
import { ActorsListProps } from '../@types/movies-list.type'

export const ActorsList: FC<ActorsListProps> = ({ actors }) => {
  return (
    <div className='w-fit sm:w-full flex flex-col gap-y-4'>
      {actors.map((eachActor) => (
        <div key={eachActor.id} className=' bg-gray-700 rounded-lg w-52 p-4'>
          <p>
            {eachActor.name}, {eachActor.country}
          </p>
          <div className='flex gap-x-2 items-center mt-2'>
            <Cake color='#FF8A65' className='size-4' />
            <p className='text-sm'>{eachActor.birth_date}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
