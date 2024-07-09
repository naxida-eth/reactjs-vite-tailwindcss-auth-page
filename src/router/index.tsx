import Layout from 'layout'
import Home from 'pages/Home'
import { createBrowserRouter, RouteObject } from 'react-router-dom'
import Login from 'pages/Login'
import GuardRoute from './GuardRoute'

export type RouteConfig = RouteObject & {
  auth?: boolean
  children?: RouteConfig[]
}

const routes: RouteConfig[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        index: true,
        element: <Home />,
        auth: true
      }
    ]
  },
  {
    path: '/*',
    element: <NotFound />
  }
]

export default createBrowserRouter(
  routes.map((route) => ({
    ...route,
    element: <GuardRoute route={route}>{route.element}</GuardRoute>
  }))
)

function NotFound() {
  return <h1>Not Found</h1>
}
