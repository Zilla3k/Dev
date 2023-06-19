import Home from "./pages/Home"
import Login from "./pages/Login"
import Dashboard from './pages/Dashboard'

export default [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  }
]