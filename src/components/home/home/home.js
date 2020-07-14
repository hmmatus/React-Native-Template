import React, { useState } from 'react'
import {SafeAreaView, Alert} from 'react-native'
import {Input,Button} from 'react-native-elements'
import { connect } from 'react-redux'

import {doLogout} from '../../../redux/reducers/authDuck'

function Login({doLogout}){
    
    function onPressLogout(){
        doLogout()
    }
    return (
        <SafeAreaView>
            <Button title='Log Out' onPress={onPressLogout}/>
        </SafeAreaView>
    )
}

function mapStateToProps(state) {
    return {
        isFetching: state.auth.isFetching
    }
}

export default connect(mapStateToProps, {doLogout})(Login)