import { NavLink } from "react-router";
import ShoppingCart from '../ShoppingCart'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/about'>
            About
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-3'>
        <li className='flex items-center'>
          <ShoppingCart />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
