import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Vote} from '@component';

export default  VoteTool =({likes,dislikes,onDislike,onLike}) =>(
      <View style={styles.votesContainer}>
        <Vote like={true} count={likes} onPress={onLike}/>
        <Vote like={false} count={dislikes} onPress={onDislike}/>
      </View>
    );

const styles = StyleSheet.create({
  votesContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 30,
    marginTop: 10,
    marginBottom: 10,
  },
});
