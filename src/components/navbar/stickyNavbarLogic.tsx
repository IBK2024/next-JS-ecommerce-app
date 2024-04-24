'use client';
import {Fragment, useEffect} from 'react';

// !Sticky Navbar Logic
export default function StickyNavbarLogic() {
  let lastScrollTop = 0;

  useEffect(() => {
    let navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (navbar) {
        if (scrollTop > lastScrollTop) {
          navbar.style.top = '-80px';
        } else {
          navbar.style.top = '0';
        }
      } else {
        navbar = document.getElementById('navbar');
        lastScrollTop = scrollTop;
      }
      lastScrollTop = scrollTop;
    });
  });
  return <Fragment />;
}
