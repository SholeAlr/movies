import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { Main } from './Main'

export const AppLayout = () => {
  return (
    <div className='h-screen w-screen'>
      <Header />
      <Sidebar />
      <Main />
    </div>
  )
}
