// @flow

import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'
import CustomNavBar from '../Navigation/CustomNavBar'

// screens identified by the router
import FeedScreen from '../Containers/FeedScreen'
import UserScreen from '../Containers/UserScreen'
import ServiceScreen from '../Containers/ServiceScreen'
import ProfileScreen from '../Containers/ProfileScreen'
import EditServiceScreen from '../Containers/EditServiceScreen'
import EditProfileScreen from '../Containers/EditProfileScreen'
import CurrencyScreen from '../Containers/CurrencyScreen'
import LoginScreen from '../Containers/LoginScreen'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene initial key='feed' component={FeedScreen} title='Feed' navBar={CustomNavBar} />
            <Scene key='user' component={UserScreen} title='User' />
            <Scene key='service' component={ServiceScreen} title='Service' />
            <Scene key='profile' component={ProfileScreen} title='Perfil' />
            <Scene key='editService' component={EditServiceScreen} title='Service' />
            <Scene key='editProfile' component={EditProfileScreen} title='Perfil' />
            <Scene key='currency' component={CurrencyScreen} title='Semillas' />
            <Scene key='login' component={LoginScreen} title='Login' hideNavBar />

            {/* Custom navigation bar example */}
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
