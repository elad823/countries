import React from 'react';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default Vote =({like,count,onPress})=> (
      <View>
          <TouchableOpacity style={styles.container}  onPress={onPress}>
            <AntDesign name={like?"like2":"dislike2"} size={22} color={like?'blue':'red'} />
            <Text style={[styles.count,{color:like?'blue':'red'}]}  numberOfLines={1}>{count}</Text>
          </TouchableOpacity>
      </View>
    );

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 30,
    marginTop: 10,

  },

  count: {
    fontWeight: 'bold',
    fontSize:12,
    backgroundColor: 'transparent',
  }

});

Vote.defaultProps = {
  count: 0
};
