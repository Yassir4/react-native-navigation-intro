import {Navigation} from 'react-native-navigation';
import {registerScreens} from './screens';

registerScreens();
export const start = () => {
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        component: {
          name: 'HomeScreen',
        },
      },
    });
  });
};
