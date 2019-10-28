
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';




import HomeScreen from '../screens/Home'
import AuthScreen from '../screens/Auth'
import CrimeInfoScreen from '../screens/Crimeinfo'





// const AuthNavigator = createStackNavigator(
//     {
//         Auth : AuthScreen
//     }
// );

const HomeNavigation = createStackNavigator(
    {
        Auth: {screen : AuthScreen},
        Home: { screen: HomeScreen },
        CrimeInfo: { screen: CrimeInfoScreen },

       
    },
    {
        initialRouteName: 'Auth',
    }
);

// const AppNavigator = createSwitchNavigator(
//     {
//         Home: HomeNavigation,
//         Auth: AuthScreen,
//     },
   
//   );



export default createAppContainer(HomeNavigation);