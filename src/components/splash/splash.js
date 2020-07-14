import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native'
import { connect } from 'react-redux';

//routes
import AuthNavigation from '../../routes/authNavigation'
import HomeNavigation from '../../routes/homeNavigation'

const initialState = {
    changeStatus: false,
}
class Splash extends Component {
    constructor(props) {
        super(props)
        state = {
            ...initialState
        }
    }
    componentDidMount() {
        SplashScreen.hide()

    }


    render() {
        const { loggedIn } = this.props;
        return (
            <NavigationContainer>
                {loggedIn ? <HomeNavigation /> : <AuthNavigation />}
            </NavigationContainer>
        )
        // if (!loggedIn) {
        //   return <AuthNavigation />
        // }
        // else {
        //   return <HomeNavigation />

        // }

    }
}

const mapStateToProps = (state) => ({
    loggedIn: state.auth.loggedIn
});

export default connect(mapStateToProps)(Splash);