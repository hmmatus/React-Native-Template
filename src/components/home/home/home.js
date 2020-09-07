import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { doLogout } from '../../../redux/reducers/authDuck';

function Home({ doLogout }) {
  function onPressLogout() {
    doLogout();
  }
  return (
    <SafeAreaView>
      <Button title="Log Out" onPress={onPressLogout} />
    </SafeAreaView>
  );
}

function mapStateToProps(state) {
  return {
    isFetching: state.auth.isFetching,
  };
}
Home.propTypes = {
  doLogout: PropTypes.func,
};

export default connect(mapStateToProps, { doLogout })(Home);
