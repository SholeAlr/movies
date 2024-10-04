import { Add, HambergerMenu } from 'iconsax-react'
import React, { FC } from 'react'
import { HeaderProps } from './@types/header.type'

export const Header: FC<HeaderProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const toggleSidebarClick = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  return (
    <div className='h-10 bg-slate-900 p-2 fixed top-0 w-screen flex justify-between'>
      <h4>Movies & Artists</h4>
      {isSidebarOpen ? (
        <Add className='text-gray-300 rotate-45' onClick={toggleSidebarClick} />
      ) : (
        <HambergerMenu className='text-gray-300' onClick={toggleSidebarClick} />
      )}
    </div>
  )
}
