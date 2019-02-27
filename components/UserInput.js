import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, TextInput, Image, TouchableOpacity} from 'react-native';


import { Entypo,FontAwesome } from '@expo/vector-icons';

export default class UserInput extends Component {


  state = {
    secureText: true
  }

  swipeShowPass= ()=> {
      this.setState({secureText:!this.state.secureText});
  }


  render() {
    const {icon,placeholder,autoCorrect,autoCapitalize,returnKeyType,onChangeText,isPassword} = this.props;
    const {secureText} = this.state;
    return (
      <View style={styles.inputWrapper}>
        <FontAwesome name={icon}  style={styles.inlineIcon} size={26} color='white' />
        <TextInput
          onChangeText={onChangeText}
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={isPassword && secureText}
          autoCorrect={autoCorrect}
          autoCapitalize={autoCapitalize}
          returnKeyType={returnKeyType}
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
        />
        {isPassword &&

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.btnEye}
          onPress={this.swipeShowPass}>
          <Entypo name={secureText?"eye":"eye-with-line"} size={20} color={'rgba(0,0,0,0.2)'} />
        </TouchableOpacity>
       }
      </View>
    );
  }
}

UserInput.propTypes = {
  icon: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  secureText: PropTypes.bool,
  autoCorrect: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  returnKeyType: PropTypes.string,
};

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    borderRadius: 30,
  },
  inlineIcon: {
      marginHorizontal: 10,
  },
  input: {

    flex: 8,
    color: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10,
  },

  btnEye: {
    flex: 1,
    zIndex: 99,
  },
  iconEye: {
    width: 20,
    height: 20,
    tintColor: 'rgba(0,0,0,0.2)',
  },
});
