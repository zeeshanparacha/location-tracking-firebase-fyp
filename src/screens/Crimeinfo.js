import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Icon, Button, Container, Header, Content, Left, Body, Right } from 'native-base'
import { Ionicons, MaterialIcons, EvilIcons } from '@expo/vector-icons';
class Crimeinfo extends Component {
    static navigationOptions = {
        header: null,
        drawerLabel: 'Home',
        drawerIcon: ({tintColor}) => <MaterialIcons name="home" size={24} color={tintColor} />
    };

    render() {

        const userName = this.props.navigation.getParam('Name', 'NO-ID')
        const UserId = this.props.navigation.getParam('userId', 'NO-ID')
        const ProfileURL = this.props.navigation.getParam('userProfile', 'NO-ID')
        const UserToken = this.props.navigation.getParam('UserToken', 'NO-ID')
        const deviceInfo = this.props.navigation.getParam('deviceinfo', 'NO-ID')
        console.log('UserName---->' , userName)
        console.log('ProfileURL---->' , ProfileURL)
        console.log('deviceInfo---->' , deviceInfo)


        return (
            <Container>
                <Header style={{ backgroundColor: '#333846' , height : 46 }}>
                    <Left style={{flex:1}}>
                        <Icon name='ios-menu' style={{ color: '#fff' }} onPress={() =>
                            this.props.navigation.toggleDrawer()} />
                    </Left>
                    <Body style={{flex:1}}>
                        <View style={{flexDirection: 'row' }}>
                            <Text style={{ }}><MaterialIcons name="my-location" size={28} color="white" /></Text>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', letterSpacing: 1.2, paddingTop: 2, }}>CITIZEN</Text>
                        </View>
                    </Body>
                    <Right style={{flex:1}} />

                </Header>
                <Content contentContainerStyle={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text>Crime info Screen</Text>
                </Content>
            </Container>
        );
    }
}



export default Crimeinfo;