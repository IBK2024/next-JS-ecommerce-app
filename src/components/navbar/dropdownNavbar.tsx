'use client';
import {Fragment, useState} from 'react';
import {Menu, Xmark} from '../icons';
import LoginButton from './loginButton';
import NavbarLink from './navbarLink';
import ShopNowButton from './shpNowButton';

// !Drop Down Navbar Props
interface DropDownNavbarProps {
  navbarLinks: {title: string; href: string}[];
}

// !Drop Down Navbar
export default function DropDownNavbar({navbarLinks}: DropDownNavbarProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function menuButtonOnClick() {
    setIsOpen(true);
  }

  function xMarkButtonOnClick() {
    setIsOpen(false);
  }

  return (
    <Fragment>
      {isOpen ? (
        <Xmark className='lg:hidden text-3xl fill-primary' onClick={xMarkButtonOnClick} />
      ) : (
        <Menu className='lg:hidden text-3xl fill-primary' onClick={menuButtonOnClick} />
      )}
      <ul
        className={`absolute top-[70px] bg-smallNavbar rounded-xl w-smallNavbar2 overflow-hidden ${
          isOpen ? 'h-fit' : 'h-0'
        } backdrop-blur-lg left-8 right-8 sm:left-[unset] sm:right-8 sm:w-smallNavbar block lg:hidden`}
      >
        {navbarLinks.map((link, i) => (
          <li className='p-3 flex items-center justify-center' key={i}>
            <NavbarLink small={true} href={link.href}>
              {link.title}
            </NavbarLink>
          </li>
        ))}
        <li className='p-3 flex items-center justify-center'>
          <LoginButton smallScreen={true} />
        </li>
        <li className='p-3 flex items-center justify-center'>
          <ShopNowButton smallScreen={true} />
        </li>
      </ul>
    </Fragment>
  );
}
