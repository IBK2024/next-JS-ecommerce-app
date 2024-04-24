import {ShoppingCart} from '@/components/icons';

// !Shopping cart button
export default function CartButton() {
  return (
    <div className='relative size-fit active:scale-95 transition-all duration-300 ease-linear cursor-pointer'>
      <ShoppingCart className='text-2xl fill-primary' />
      <div className='absolute top-[-10px] right-[-10px] bg-secondary rounded-[100%] p-1/2 text-primary'>0</div>
    </div>
  );
}
