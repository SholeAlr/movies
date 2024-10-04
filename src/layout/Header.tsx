import { HambergerMenu } from 'iconsax-react'
import React from 'react'

export const Header = () => {
  return (
    <div className='h-10 bg-slate-900 p-2 fixed top-0 w-screen flex justify-between'>
      <h4>Movies & Artists</h4>
      <HambergerMenu className='text-gray-300' />
    </div>
  )
}
