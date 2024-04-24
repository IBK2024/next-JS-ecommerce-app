import type {MouseEventHandler} from 'react';

// !Shopping Cart font icon props
export interface ShoppingCartProps {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

// !Shopping Cart font icon
export default function ShoppingCart({className, onClick}: ShoppingCartProps) {
  return (
    <svg
      className={className}
      onClick={onClick}
      xmlns='http://www.w3.org/2000/svg'
      width='0.88em'
      height='1em'
      viewBox='0 0 448 512'
    >
      <title>Shopping Cart</title>
      <path d='M352 160v-32C352 57.42 294.579 0 224 0C153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24s24 10.745 24 24s-10.745 24-24 24m-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24s24 10.745 24 24s-10.745 24-24 24' />
    </svg>
  );
}
