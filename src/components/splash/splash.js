import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// routes
import AuthNavigation from '../../routes/authNavigation';
import HomeNavigation from '../../routes/homeNavigation';

const initialState = {
  changeStatus: false,
};
class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    const { loggedIn } = this.props;
    return (
      <NavigationContainer>
        {loggedIn ? <HomeNavigation /> : <AuthNavigation />}
      </NavigationContainer>
    );
  }
}

Splash.propTypes = {
  loggedIn: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  loggedIn: state.auth.loggedIn,
});

export default connect(mapStateToProps)(Splash);
