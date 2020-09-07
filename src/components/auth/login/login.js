import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { doLoginWithCredentialsAction } from '../../../redux/reducers/authDuck';

function Login({
  isFetching, error, doLoginWithCredentialsAction, navigation,
}) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [errorVar, setError] = useState('');

  function onChangeEmail(value) {
    setEmail(value);
  }

  function onChangePass(value) {
    setPass(value);
  }

  function onPressLogin() {
    doLoginWithCredentialsAction(email, pass).then(() => {
      if (error) {
        setError(error);
      }
    });
  }
  return (
    <SafeAreaView>
      <Input label="Email" onChangeText={(value) => onChangeEmail(value)} value={email} />
      <Input label="Password" secureTextEntry onChangeText={(value) => onChangePass(value)} errorMessage={errorVar} value={pass} />
      <Button loading={isFetching} disabled={isFetching} title="Log In" onPress={onPressLogin} />
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
    </SafeAreaView>
  );
}

function mapStateToProps(state) {
  return {
    isFetching: state.auth.isFetching,
    error: state.auth.loginError,
  };
}

Login.propTypes = {
  isFetching: PropTypes.bool,
  error: PropTypes.string,
  doLoginWithCredentialsAction: PropTypes.func,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
export default connect(mapStateToProps, { doLoginWithCredentialsAction })(Login);
