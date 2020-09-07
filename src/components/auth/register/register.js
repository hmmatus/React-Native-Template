import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Input, Button, CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { doRegisterAction } from '../../../redux/reducers/authDuck';

function Register({
  isFetching, error, doRegisterAction, navigation,
}) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [checked, setChecked] = useState(false);
  const [errorVar, setError] = useState('');

  function onChangeEmail(value) {
    setEmail(value);
  }

  function onChangePass(value) {
    setPass(value);
  }
  function onChangeName(value) {
    setName(value);
  }

  function onPressRegister() {
    const data = {
      email,
      pass,
      name,
      checked,
    };
    doRegisterAction(data)
      .then(() => {
        if (error) {
          setError(`${error}`);
        } else {
          navigation.navigate('Login');
        }
      });
  }
  return (
    <SafeAreaView>
      <Input label="Email" onChangeText={(value) => onChangeEmail(value)} value={email} />
      <Input label="Pass" secureTextEntry onChangeText={(value) => onChangePass(value)} errorMessage={errorVar} value={pass} />
      <Input label="Username" onChangeText={(value) => onChangeName(value)} value={name} />
      <CheckBox checked={checked} onPress={() => setChecked(!checked)} title="Receive notifications" />
      <Button loading={isFetching} disabled={isFetching} title="Register" onPress={onPressRegister} />
    </SafeAreaView>
  );
}

Register.propTypes = {
  isFetching: PropTypes.bool,
  error: PropTypes.string,
  doRegisterAction: PropTypes.func,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};

function mapStateToProps(state) {
  return {
    isFetching: state.auth.isFetching,
    error: state.auth.registerError,
  };
}

export default connect(mapStateToProps, { doRegisterAction })(Register);
