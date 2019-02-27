import React, {Component} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  Image,
  Text
} from 'react-native';

import {UserInput,ButtonSubmit} from '@component';

const credentials={
  userName:"khealth",
  password:"khealth"
}

export default class Form extends Component {

  state={
    userName:null,
    password:null,
    invalid:false

  }

  validateUser = ()=>{
    const {onSubmit} = this.props
    const {userName,password} = this.state;
    if (userName ===credentials.userName && password ===credentials.password)
    {
      this.setState({invalid:false})
      onSubmit()
    }
    else {
      this.setState({invalid:true})
    }

  }

  render() {

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <UserInput
          icon="user"
          placeholder="Username"
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
          onChangeText={(userName)=>this.setState({userName})}
        />
        <UserInput
          icon="lock"
          placeholder="Password"
          returnKeyType={'done'}
          autoCapitalize={'none'}
          autoCorrect={false}
          isPassword={true}
          onChangeText={(password)=>this.setState({password})}
        />
        <ButtonSubmit onSubmit={this.validateUser} />
        {this.state.invalid &&
          <Text style={styles.error}> Wrong username or password</Text>
        }
      </KeyboardAvoidingView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  error:{
    color:'red',
    fontWeight:'bold',
    fontSize:20
  }
});
