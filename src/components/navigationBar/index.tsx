import NavigationBarContextProvider from '@/context/navigationBarContext';
import MainNavigationBar from './mainNavigationBar';
import NavigationBarButtons from './navigationBarButtons';
import NavigationBarLogo from './navigationBarLogo';

// !Navigation bar
export default function NavigationBar() {
  return (
    <header className='w-full h-navbar bg-accent relative'>
      <div className='flex items-center justify-between w-full h-full p-7 text-primary bg-secondary bg-opacity-10 backdrop-blur-3xl absolute top-0 left-0 tablet:bg-accent'>
        <NavigationBarContextProvider>
          <NavigationBarLogo />
          <MainNavigationBar />
          <NavigationBarButtons />
        </NavigationBarContextProvider>
      </div>
    </header>
  );
}
