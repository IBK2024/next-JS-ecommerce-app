import type {MouseEventHandler} from 'react';

// !Menu icon props
interface MenuProps {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

// !Menu icon
export default function Menu(props: MenuProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
      <title>Menu</title>
      <path d='M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z' />
    </svg>
  );
}
