import React, { useState } from 'react'
import {SafeAreaView, Alert} from 'react-native'
import {Input,Button} from 'react-native-elements'
import { connect } from 'react-redux'

import {doLoginWithCredentialsAction} from '../../../redux/reducers/authDuck'

function Login({isFetching,doLoginWithCredentialsAction}){
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')

    function onChangeEmail(value){
        setEmail(value)
    }

    function onChangePass(value){
        setPass(value)
    }

    function onPressLogin(){
        doLoginWithCredentialsAction(email,pass)
    }
    return (
        <SafeAreaView>
            <Input onChangeText={value=>onChangeEmail(value)} value={email}/>
            <Input onChangeText={value=>onChangePass(value)} value={pass}/>
            <Button loading={isFetching} disabled={isFetching} title='Log In' onPress={onPressLogin}/>
        </SafeAreaView>
    )
}

function mapStateToProps(state) {
    return {
        isFetching: state.auth.isFetching
    }
}

export default connect(mapStateToProps, {doLoginWithCredentialsAction})(Login)