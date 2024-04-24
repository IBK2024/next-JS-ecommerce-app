import Link from 'next/link';

// !Login Button props
interface LoginButtonProps {
  smallScreen?: true;
}

// !Login Button
export default function LoginButton({smallScreen}: LoginButtonProps) {
  if (!smallScreen) {
    return (
      <Link
        href='/login'
        className='hidden bg-transparent border-solid border-[1px] border-primary text-primary tracking-normal py-2 px-4 text-xs rounded-3xl font-bold hover:bg-secondary hover:border-none active:scale-95 lg:block'
      >
        Login
      </Link>
    );
  }
  return (
    <Link
      className='bg-transparent border-solid border-[1px] border-primary text-primary tracking-normal py-2 px-4 text-xs rounded-3xl font-bold hover:bg-secondary hover:border-none active:scale-95 w-full'
      href='/login'
    >
      Login
    </Link>
  );
}
