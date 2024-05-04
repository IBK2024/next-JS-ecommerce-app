import {Logo} from '@/components/icons';
import Link from 'next/link';

// !Navigation bar logo
export default function NavigationBarLogo() {
  return (
    <Link href='/' className='inline-flex items-center text-3xl font-bold gap-x-1 text-primary fill-primary'>
      <Logo />
      Store
    </Link>
  );
}
