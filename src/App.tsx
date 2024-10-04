import { Navigate, Route, Routes } from 'react-router-dom'
import { RoutesConfig } from './routes/RoutesConfig'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/movies' replace />} />
      {RoutesConfig.map((eachRoute) => (
        <Route key={eachRoute.path} element={eachRoute.layout}>
          <Route path={eachRoute.path} element={eachRoute.element} />
        </Route>
      ))}
    </Routes>
  )
}

export default App
