import type {MouseEventHandler} from 'react';

// !Menu font icon props
export interface MenuProps {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

// !Menu font icon
export default function Menu({className, onClick}: MenuProps) {
  return (
    <svg
      onClick={onClick}
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      className={className}
    >
      <title>Menu</title>
      <path d='M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z' />
    </svg>
  );
}
