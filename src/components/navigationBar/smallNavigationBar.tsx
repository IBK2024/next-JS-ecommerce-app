import {Fragment} from 'react';
import NavigationBarToggleButton from './navigationBarToggleButton';
import SmallNavigationDropdown from './smallNavigationDropdown';

// !Small navigation bar
export default function SmallNavigationBar() {
  return (
    <Fragment>
      <NavigationBarToggleButton />
      <SmallNavigationDropdown />
    </Fragment>
  );
}
