import React  from 'react';
import {StyleSheet,  Text, Image,TouchableOpacity} from 'react-native';
import CountriesFlags from '@small-flags/flags';
import { connect } from 'react-redux';
import {VoteTool} from '@component';

const Card = ({title,summary,likes,dislikes,onPress}) => {
    const uri = CountriesFlags[title.replace(/\s+/g, "_").toLowerCase()];
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.title}  numberOfLines={1}>{title}</Text>
        <Image source={uri} style={styles.image} />
        <Text style={styles.summary} numberOfLines={4}>{summary}</Text>
        <VoteTool likes={likes} dislikes={dislikes} />
      </TouchableOpacity>
    )
  }

const styles = StyleSheet.create({
  container: {
    height:220,
    width:150,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
  },
  title: {
    color: 'green',
    fontWeight: 'bold',
    fontSize:20,
    backgroundColor: 'transparent',
    height:30,

  },
  image: {
    width: 40,
    height: 40,
    marginTop: 10,
  },
  summary: {
    color: 'black',
    fontWeight: 'bold',
    fontSize:15,
    height: 80,
    marginTop: 10,
  },

});

const mapStateToProps = (state,ownProps) => {
  const {title} = ownProps;
  const votes = state.voteReducer[title];
  return {
    likes:votes?votes.likes:0,
    dislikes:votes?votes.dislikes:0
  }
}


export default connect(mapStateToProps)(Card)
