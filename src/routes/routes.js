import React, { Component } from 'react'
import { View, Image, TouchableOpacity, StyleSheet, StatusBar, Dimensions } from 'react-native'
import { Button, Text, Icon } from 'native-base'

//For React Navigation 3.+ import following
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation'

import dashboardScreen from '../screens/dashboardScreen'
import profileScreen from '../screens/profileScreen'
import profileEditScreen from '../screens/profileEditScreen'
import loginScreen from '../screens/loginScreen'
import customSideMenu from '../customSideMenu'

import Leave from '../assets/images/leave.png';
import About from '../assets/images/about.png';
import Home from '../assets/images/home.png';
import Timesheet from '../assets/images/timesheet.png';
import Reimbursement from '../assets/images/reimbursement.png';
import Settings from '../assets/images/settings.png';

class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };

  render() {
    StatusBar.setBackgroundColor('#0063AD', true)

    return (
      
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image style={styles.btnMenu}
            source={require('../assets/images/menu.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  btnMenu: {
    width: 25, 
    height: 25, 
    marginHorizontal: 20,
  },
  btnSave:{
    color: "#FFF"
  }

})

const MainScreen = createStackNavigator({
  Main: {
    screen: dashboardScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Dashboard',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#0072C6',    
      },
      headerTintColor: '#fff',
    }),
  },
});

const ProfileScreen = createStackNavigator({
  Profile: {
    screen: profileScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile',
      drawerIcon: () => <Icon name='home'/>,
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#0072C6',
      },
      headerTintColor: '#fff',
    }),
  },
  ProfileEdit: {
    screen: profileEditScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Edit Profile',

      headerStyle: {
        backgroundColor: '#0072C6',
      },
      headerTintColor: '#fff',
    }),
  },
}); 

//For React Navigation 3.+
const drawerNavigator = createDrawerNavigator({
  //Drawer Optons and indexing
  Dashboard: {
    //Title
    screen: MainScreen ,
    navigationOptions: {
      drawerLabel: 'Dashboard',
      drawerIcon: ({tintColor}) => (<Image 
        style={{width: 25, height: 25, tintColor: "#0072C6"}} 
        source={Home} />)
    },
  },
  Timesheet: {
    //Title
    screen: ProfileScreen ,
    navigationOptions: {
      drawerLabel: 'Timesheet',
      drawerIcon: ({tintColor}) => (<Image 
        style={{width: 25, height: 25, tintColor: "#0072C6"}} 
        source={Timesheet} />)
    },
  },
  Leave: {
    //Title
    screen: ProfileScreen ,
    navigationOptions: {
      drawerLabel: 'Leave',
      drawerIcon: ({tintColor}) => (<Image 
        style={{width: 25, height: 25, tintColor: "#0072C6"}} 
        source={Leave} />)
    },
  },
  Reimbursement: {
    //Title
    screen: ProfileScreen ,
    navigationOptions: {
      drawerLabel: 'Reimbursement & Quick Leave       ',
      drawerIcon: ({tintColor}) => (<Image 
        style={{width: 25, height: 25, tintColor: "#0072C6"}} 
        source={Reimbursement} />)
    },
  },
  Settings: {
    //Title
    screen: ProfileScreen ,
    navigationOptions: {
      drawerLabel: 'Settings',
      drawerIcon: ({tintColor}) => (<Image 
        style={{width: 25, height: 25, tintColor: "#0072C6"}} 
        source={Settings} />)
    },
  },
  About: {
    //Title
    screen: ProfileScreen ,
    navigationOptions: {
      drawerLabel: 'About',
      drawerIcon: ({tintColor}) => (<Image 
        style={{width: 25, height: 25, tintColor: "#0072C6"}} 
        source={About} />)
    },
  },
},
  {
    contentComponent: customSideMenu,
    drawerWidth: Dimensions.get('window').width - 130,
    initialRouteName: 'Dashboard',
    
    drawerWidth: 304,
    contentOptions: {
      activeTintColor: "#0072C6",
      inactiveTintColor :'#666',
      activeBackgroundColor: '#f1f1f1',
      inactiveBackgroundColor : 'rgba(0,0,0,0)',
      labelStyle: {fontWeight: 'normal'}
    },
  }
);

const AppNavigator = createStackNavigator({
  LoginScreen: { 
    screen: loginScreen,

    navigationOptions: {
      header: null,
    }
    
  },
  DrawerNavigator: { 
    screen: drawerNavigator,

    navigationOptions: {
      header: null
    }
  }
  }, 
  { 
    initialRouteName: 'DrawerNavigator',
    // initialRouteName: 'LoginScreen',
  }
);

export default AppNavigator

// export default createAppContainer(drawerNavigator);