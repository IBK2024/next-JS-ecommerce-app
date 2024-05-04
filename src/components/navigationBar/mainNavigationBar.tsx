'use client';
import {NavigationBarContext} from '@/context/navigationBarContext';
import Link from 'next/link';
import {useContext} from 'react';

// !Main navigation bar
export default function MainNavigationBar() {
  const {navigationBarLinks} = useContext(NavigationBarContext);

  return (
    <nav className='items-center justify-center hidden gap-3 tablet:flex'>
      {navigationBarLinks.map((navigationBarLink, i) => (
        <Link key={i} href={navigationBarLink.href} className='text-xl font-medium group -tracking-wide'>
          {navigationBarLink.title}
          <u className='block w-0 h-px mx-auto transition-all duration-300 ease-in-out group-hover:w-full bg-primary ' />
        </Link>
      ))}
    </nav>
  );
}
