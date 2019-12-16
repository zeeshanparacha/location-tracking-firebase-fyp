import React, { Component } from 'react';
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { Ionicons, MaterialIcons, EvilIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Icon, Button, Container, Header, Content, Left, Body, Right } from 'native-base'

import HomeScreen from '../screens/Home'
import AuthScreen from '../screens/Auth'
import CrimeInfoScreen from '../screens/Crimeinfo'





// const AuthNavigator = createStackNavigator(
//     {
//         Auth : AuthScreen
//     }
// );
const CustomDrawerContentComponent = (props) => (

    <Container>
        <Header style={{ height: 150, backgroundColor: '#fff', shadowOffset: { height: 0, width: 0 }, shadowOpacity: 0, elevation: 0 }}>
            <Body style={{ flexDirection : 'row' , marginTop : -40}}>
                <View>
                    <Image
                        style={styles.drawerImage}
                        source={{ uri: props.navigation.state.params.userProfile }} />
                </View>
                <View style={{alignSelf:'flex-start' , marginLeft : 5 , marginTop : 10}}>
                    <Text style={{fontSize: 14, fontFamily: 'ralewayRegular'}}>{props.navigation.state.params.Name}</Text>
                    <Text style={{fontSize: 10, fontFamily: 'ralewayRegular' ,color : '#5d616f',marginTop : 3}}>Mobile#: {props.navigation.state.params.deviceinfo}</Text>
                </View>
                
            </Body>
        </Header>
        <Content>
            <DrawerItems iconContainerStyle={{ opacity: 1 }}{...props} />
        </Content>
    </Container>
)

const MyDrawerNavigator = createDrawerNavigator({
    crimeInfo: {
        screen: CrimeInfoScreen,
    }
},
    {
        contentComponent: CustomDrawerContentComponent,
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle'
    }

);

const HomeNavigation = createStackNavigator(
    {
        Auth: { screen: AuthScreen },
        Home: { screen: HomeScreen },
        CrimeInfo: { screen: MyDrawerNavigator },


    },
    {
        initialRouteName: 'Auth',
        header: null,
        headerMode: 'none'
    }
    // {
    //     defaultNavigationOptions: ({ navigation }) => {
    //       return {
    //         headerTitle: (<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', paddingBottom: 16 }}>
    //             <Text style={{paddingTop : 6}}><MaterialIcons name="my-location" size={28} color="white" /></Text>
    //            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', letterSpacing: 1.2, fontFamily: 'ralewayRegular', paddingTop : 8 , }}>CITIZEN</Text></View>),
    //         headerTitleStyle: { flex: 1, textAlign: 'center', paddingBottom: 6,},
    //         headerLayoutPreset: 'center',
    //         headerLeft: (
    //           <TouchableOpacity
    //             onPress={() => navigation.toggleDrawer()}
    //             style={{
    //               left: Dimensions.get('window').height < 667 ? '8%' : '3%',
    //               // backgroundColor: 'red',
    //               width: '100%',
    //               marginLeft: 10,
    //               paddingBottom: 10
    //             }}>
    //             <Image
    //               style={{ width: 25, height: 25 }}
    //               source={require('../assets/images/toggle.png')}
    //               tintColor='white'
    //             />
    //           </TouchableOpacity>
    //         ),
    //         headerRight: <View style={{ height: 50, width: 50 }}></View>,
    //         headerStyle: { height: 30,backgroundColor : '#333846' },
    //       };
    //     }
    //   },
);



// const AppNavigator = createSwitchNavigator(
//     {
//         Home: HomeNavigation,
//         Auth: AuthScreen,
//     },

//   );

const styles = StyleSheet.create({
    drawerImage: {
        height: 90,
        width: 90,
        borderRadius: 75,

    }
});




export default createAppContainer(HomeNavigation);