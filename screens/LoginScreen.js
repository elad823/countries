import React, {Component} from 'react';
import {Logo,Form,Wallpaper} from '@component';
export default class LoginScreen extends Component {
  render() {
    return (
      <Wallpaper>
        <Logo />
        <Form  onSubmit={() => this.props.navigation.navigate('Main')}/>
      </Wallpaper>
    );
  }
}
