import Link from 'next/link';

// !Shop Now Button props
interface ShopNowButtonProps {
  smallScreen?: true;
}

// !Shop Now Button
export default function ShopNowButton({smallScreen}: ShopNowButtonProps) {
  if (!smallScreen) {
    return (
      <Link
        href='/categories'
        className='bg-secondary text-primary tracking-normal py-2 px-4 text-xs rounded-3xl font-bold active:scale-95 hover:opacity-80 hidden lg:block'
      >
        Shop Now
      </Link>
    );
  }

  return (
    <Link
      className='bg-secondary text-primary tracking-normal py-2 px-4 text-xs rounded-3xl font-bold active:scale-95 w-full hover:opacity-80'
      href='/categories'
    >
      Shop Now
    </Link>
  );
}
