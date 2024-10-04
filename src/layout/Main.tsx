import { Outlet } from 'react-router-dom'

export const Main = () => {
  return (
    <main className='pt-12 px-2'>
      <Outlet />
    </main>
  )
}
