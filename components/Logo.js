import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default Logo =()=> (
      <View style={styles.container}>
        <FontAwesome name="globe" size={80} />
        <Text style={styles.text}>Countries</Text>
      </View>
    );


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 80,
    height: 80,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize:20,
    backgroundColor: 'transparent',
    marginTop: 20,
  },
});
