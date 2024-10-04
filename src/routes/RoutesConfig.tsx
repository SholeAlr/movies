import { AppLayout } from '../layout/AppLayout'
import { Actors } from '../pages/actors/Actors'
import { Movies } from '../pages/movies/Movies'

export const RoutesConfig = [
  {
    layout: <AppLayout />,
    path: '/movies',
    element: <Movies />,
  },
  {
    layout: <AppLayout />,
    path: '/actors',
    element: <Actors />,
  },
]
