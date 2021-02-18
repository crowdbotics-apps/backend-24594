import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings206982Navigator from '../features/Settings206982/navigator';
import UserProfile206975Navigator from '../features/UserProfile206975/navigator';
import Settings206974Navigator from '../features/Settings206974/navigator';
import Settings206972Navigator from '../features/Settings206972/navigator';
import SignIn2206970Navigator from '../features/SignIn2206970/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings206982: { screen: Settings206982Navigator },
UserProfile206975: { screen: UserProfile206975Navigator },
Settings206974: { screen: Settings206974Navigator },
Settings206972: { screen: Settings206972Navigator },
SignIn2206970: { screen: SignIn2206970Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
