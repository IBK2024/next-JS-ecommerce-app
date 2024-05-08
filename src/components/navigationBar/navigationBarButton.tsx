import Link from 'next/link';
import type {ReactNode} from 'react';
import {twMerge} from 'tailwind-merge';

// !Navigation bar default button props
interface NavigationBarButtonProps {
  className?: string;
  children: ReactNode;
  href: string;
}
// !Navigation bar default button
export default function NavigationBarButton({className, ...props}: NavigationBarButtonProps) {
  return (
    <Link
      className={twMerge(
        'bg-transparent border border-none border-primary text-primary tracking-normal py-2 px-4 text-xs rounded-3xl font-bold hover:bg-secondary hover:opacity-85 active:scale-95 transition-all duration-300 ease-in-out hidden tablet:block bg-secondary',
        className
      )}
      {...props}
    />
  );
}
