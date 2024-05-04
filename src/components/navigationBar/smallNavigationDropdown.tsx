'use client';
import {NavigationBarContext} from '@/context/navigationBarContext';
import Link from 'next/link';
import {useContext} from 'react';
import NavigationBarButton from './navigationBarButton';

// !Small navigation dropdown menu
export default function SmallNavigationDropdown() {
  const {isOpen, navigationBarLinks} = useContext(NavigationBarContext);

  return (
    <ul
      className={`${
        isOpen ? 'h-fit' : 'h-0 overflow-hidden'
      } tablet:hidden absolute top-full left-0 w-screen bg-secondary bg-opacity-10 backdrop-blur-3xl px-4 transition-[height] duration-300 ease-in-out`}
    >
      {navigationBarLinks.map((navigationBarLink, i) => (
        <li className='text-xl w-fit mx-auto text-center font-medium group -tracking-wide py-2' key={i}>
          <Link href={navigationBarLink.href}>{navigationBarLink.title}</Link>
          <u className='block w-0 h-px mx-auto transition-all ease-in group-hover:w-full bg-primary' />
        </li>
      ))}
      <li className='py-2'>
        <NavigationBarButton className='block' href='/login'>
          Login
        </NavigationBarButton>
      </li>
      <li className='my-2'>
        <NavigationBarButton className='border-none bg-secondary block' href='/categories'>
          Shop Now
        </NavigationBarButton>
      </li>
    </ul>
  );
}
