import type {MouseEventHandler} from 'react';

// !Logo icon props
interface LogoProps {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

// !Logo icon
export default function Logo(props: LogoProps) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 400 400' {...props}>
      <title>IBK</title>
      <g transform='translate(0,400) scale(0.1,-0.1)' stroke='none'>
        <path
          d='M1860 3990 c-895 -64 -1637 -717 -1815 -1595 -132 -653 74 -1335 546
-1806 679 -676 1730 -776 2528 -240 583 393 921 1084 871 1785 -52 723 -477
1351 -1125 1662 -199 95 -341 139 -555 173 -152 24 -310 31 -450 21z m-940
-2040 l0 -630 -80 0 -80 0 0 630 0 630 80 0 80 0 0 -630z m962 619 c157 -34
238 -124 246 -276 4 -75 2 -88 -23 -138 -25 -52 -109 -135 -136 -135 -5 0 -9
-4 -9 -10 0 -5 8 -10 18 -10 32 -1 100 -38 145 -79 144 -133 122 -419 -40
-532 -89 -62 -139 -69 -488 -69 l-305 0 0 630 0 630 270 0 c161 0 290 -5 322
-11z m778 -264 c0 -151 4 -275 8 -275 5 0 125 124 267 275 l257 275 84 0 c62
0 84 -3 84 -13 0 -7 -122 -145 -271 -306 l-271 -293 25 -26 c13 -15 144 -155
291 -312 146 -156 266 -290 266 -297 0 -10 -23 -13 -88 -13 l-88 0 -268 283
c-148 155 -275 283 -282 285 -12 3 -14 -47 -14 -282 l0 -286 -80 0 -80 0 0
630 0 630 80 0 80 0 0 -275z'
        />
        <path
          d='M1450 2249 l0 -201 193 4 c171 3 196 6 232 25 49 26 70 48 90 96 22
53 19 125 -7 177 -45 88 -84 99 -330 100 l-178 0 0 -201z'
        />
        <path
          d='M1450 1685 l0 -236 233 3 c221 3 234 4 272 26 69 40 105 110 105 207
0 102 -35 166 -114 208 -38 21 -56 22 -268 25 l-228 3 0 -236z'
        />
      </g>
    </svg>
  );
}
