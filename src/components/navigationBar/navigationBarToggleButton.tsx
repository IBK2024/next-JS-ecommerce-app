'use client';
import {Menu, Xmark} from '@/components/icons';
import {NavigationBarContext} from '@/context/navigationBarContext';
import {useContext} from 'react';

// !Navigation bar toggle button
export default function NavigationBarToggleButton() {
  const {isOpen, setIsOpen} = useContext(NavigationBarContext);
  const className = 'text-2xl fill-primary';
  const closeButtonClassName = `${isOpen ? '' : 'hidden'} ${className}`;
  const menuButtonClassName = `${isOpen ? 'hidden' : ''} ${className}`;

  function navigationBarToggleButtonOnClick() {
    if (!isOpen) {
      setIsOpen(true);
      return;
    }
    setIsOpen(false);
  }

  return (
    <div className='transition-all duration-300 ease-in-out cursor-pointer select-none scale-95 block tablet:hidden' onClick={navigationBarToggleButtonOnClick}>
      <Xmark className={closeButtonClassName} />
      <Menu className={menuButtonClassName} />
    </div>
  );
}
