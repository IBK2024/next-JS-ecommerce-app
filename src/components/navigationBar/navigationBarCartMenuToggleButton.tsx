import {ShoppingCart} from '@/components/icons';

// !Navigation bar cart menu toggle button
export default function NavigationBarCartMenuToggleButton() {
  return (
    <div className='relative flex items-center justify-center transition-all duration-300 ease-linear cursor-pointer select-none size-fit active:scale-75'>
      <ShoppingCart className='text-2xl fill-primary' />
      <div className='absolute flex items-center justify-center text-center rounded-full -top-3 -right-3 bg-secondary size-5'>0</div>
    </div>
  );
}
