import {Fragment} from 'react';
import CartButton from './cartButton';
import DropDownNavbar from './dropdownNavbar';
import LoginButton from './loginButton';
import NavbarLink from './navbarLink';
import ShopNowButton from './shpNowButton';
import StickyNavbarLogic from './stickyNavbarLogic';

// ! Navbar
export default function Navbar() {
  const navLinks = [{title: 'Tees', href: '/categories/tees'}];
  return (
    <Fragment>
      <div className='w-screen bg-accent h-navbar' />
      <header
        id='navbar'
        className='w-screen bg-accent text-primary *:list-none transition-all top-0 ease-linear duration-75 fixed'
      >
        <StickyNavbarLogic />
        <div className='relative px-8'>
          <div className='flex justify-between items-center h-navbar mx-auto'>
            <NavbarLink href='/' logo={true}>
              Logo
            </NavbarLink>
            <ul className='items-center justify-between gap-8 hidden tablet:flex'>
              {navLinks.map((link, i) => (
                <li key={i}>
                  <NavbarLink href={link.href}>{link.title}</NavbarLink>
                </li>
              ))}
            </ul>
            <div className='flex items-center justify-between gap-4'>
              <LoginButton />
              <ShopNowButton />
              <CartButton />
              <DropDownNavbar navbarLinks={navLinks} />
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
}
