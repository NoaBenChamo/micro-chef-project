import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import Welcome from './pages/Welcome'
import Auth from './pages/Auth'
import FridgeDashboard from './pages/FridgeDashboard'
import InventoryAnalytics from './pages/InventoryAnalytics'
import AiRecipeDetails from './pages/AiRecipeDetails'
import AppNavbar from './pages/AppNavbar'

function Layout() {
  return (
    <>
      <AppNavbar />
      <main className="p-6">
        <Outlet /> 
      </main>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      {
        path: '/',
        element: <Welcome />
      },
      {
        path: '/auth',
        element: <Auth />
      },
      {
        path: '/dashboard',
        element: <FridgeDashboard />
      },
      {
        path: '/inventory',
        element: <InventoryAnalytics />
      },
      {
        path: '/recipe/:id',
        element: <AiRecipeDetails />
      }
    ]
  }
])

export default function App() {
  return <RouterProvider router={router} />
}