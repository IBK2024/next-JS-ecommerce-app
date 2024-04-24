import Link from 'next/link';
import type {ReactNode} from 'react';

// !Navbar Links Props
interface NavbarLinkProps {
  children: ReactNode;
  logo?: true;
  small?: true;
  href: string;
}

// !Navbar Links
function NavbarLink({children, logo, href}: NavbarLinkProps) {
  if (!logo) {
    return (
      <Link href={href} className='text-xl hover:opacity-80 -tracking-wide group'>
        {children}
        <u className='block w-0 bg-primary opacity-80 h-px transition-all mx-auto ease-in group-hover:w-full' />
      </Link>
    );
  }

  return (
    <Link href={href} className='text-2xl hover:opacity-80 -tracking-wide font-bold'>
      {children}
    </Link>
  );
}

export default NavbarLink;
