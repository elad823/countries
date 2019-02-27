import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default ButtonLogout=({onPress})=>(
  <TouchableOpacity
    style={{marginRight:10}}
    onPress={onPress}>
    <MaterialCommunityIcons name='logout' size={25} color='white' />
  </TouchableOpacity>
)
