import { UserOctagon, VideoOctagon } from 'iconsax-react'
import { AppLayout } from '../layout/AppLayout'
import { Artists } from '../pages/artists/Artists'

import { Movies } from '../pages/movies/Movies'

export const RoutesConfig = [
  {
    layout: <AppLayout />,
    path: '/movies',
    element: <Movies />,
    title: 'Movies',
    icon: VideoOctagon,
  },
  {
    layout: <AppLayout />,
    path: '/artists',
    element: <Artists />,
    title: 'Artists',
    icon: UserOctagon,
  },
]
