import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Logo from '../components/Logo'

export default function Navbar() {
  return (
    <nav className="container p-6 mx-auto">
      <div className="flex items-center justify-between w-full">

        <Link to={'/'} >
          <Logo />
        </Link>

        <Button button="outline-primary" >
          <Link to={'/login'} >
            Login
          </Link>
        </Button>

      </div>
    </nav>
  )
}