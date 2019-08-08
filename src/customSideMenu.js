import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native'
import { Icon, Button } from 'native-base';
import { NavigationActions, DrawerActions, DrawerItems, StackActions } from 'react-navigation';
import EmployeeResource from './network/EmployeeResource';
import Leave from './assets/images/leave.png';
import About from './assets/images/about.png';
import Home from './assets/images/home.png';
import Timesheet from './assets/images/timesheet.png';
import Reimbursement from './assets/images/reimbursement.png';
import Settings from './assets/images/settings.png';
import ProfilePicBg from './assets/images/profile-backdrop.jpg';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class customSideMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            data: [],
        }
    }

    getEmployeeData() {
        this.setState({ loading: true })

        EmployeeResource.getEmployeeById(1)
            .then((res) => {
                this.setState({
                    loading: false,
                    data: res.data
                })
            })
            .catch((err) => {
                alert(err)
            });
    }

    componentDidMount() {
        this.getEmployeeData();
    }
    render() {
        return (
            <View style={styles.sideMenuContainer}
                data={this.state.data}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ color: '#FFF', fontSize: 12, marginTop: 15, marginBottom: 10, marginStart: 19, flex: 1 }}>NAVIGATION</Text>
                    <TouchableOpacity onPress={() => { DrawerActions.closeDrawer() }}>
                        <Image style={{ width: 20, height: 20, marginHorizontal: 20, resizeMode: "contain", display: "none" }} source={{ uri: this.state.data.imageUrl }} />
                    </TouchableOpacity>
                </View>
                <DrawerItems style={{ width: '100%' }}
                    {...this.props}
                    onItemPress={
                        (route, focused) => {
                            // this.props.onItemPress({ route, focused })
                            const navigateAction = NavigationActions.navigate({
                                routeName: route.route.routeName,
                            });

                            this.props.navigation.dispatch(navigateAction);
                            this.props.navigation.dispatch(DrawerActions.closeDrawer())
                        }
                    }
                />
                <Image source={{ uri: this.state.data.imageUrl }} style={styles.profilePhoto} onPress={() => { this.props.navigation.navigate('Profile') }} />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sideMenuContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        paddingTop: 20
    },
    profilePhoto: {
        borderRadius: 200,
        height: 100,
        width: 100,
    },
    sideMenuProfileIcon: {
        resizeMode: 'center',
        width: 150,
        height: 150,
        borderRadius: 150 / 2
    },
    sideMenuButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    sideMenuIcon: {
        resizeMode: 'center',
        width: 28,
        height: 28,
        marginRight: 10,
        marginLeft: 20
    },
    menuText: {
        fontSize: 15,
        color: '#222222',
        marginLeft: 7.5
    }
});