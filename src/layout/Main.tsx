import { Outlet } from 'react-router-dom'

export const Main = () => {
  return (
    <main className='pt-12 px-2 w-full h-[calc(100vh-2px)]'>
      <Outlet />
    </main>
  )
}
