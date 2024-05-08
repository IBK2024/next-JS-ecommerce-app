import NavigationBarButton from './navigationBarButton';
import NavigationBarCartMenuToggleButton from './navigationBarCartMenuToggleButton';
import SmallNavigationBar from './smallNavigationBar';

// !Navigation bar buttons
export default function NavigationBarButtons() {
  return (
    <div className='flex items-center justify-between gap-3'>
      <NavigationBarButton href='/login'>Login</NavigationBarButton>
      <NavigationBarCartMenuToggleButton />
      <SmallNavigationBar />
    </div>
  );
}
