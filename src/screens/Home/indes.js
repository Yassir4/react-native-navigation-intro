import {Navigation} from 'react-native-navigation';
import Home from '../Home';

Navigation.registerComponent('HomeScreen', () => Home);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'HomeScreen',
      },
    },
  });
});
