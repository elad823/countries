import React, {Component} from 'react';
import {StyleSheet, View, Text, Image,Button} from 'react-native';
import CountriesFlags from '@big-flags/flags';
import { connect } from 'react-redux';
import {VoteTool,Wallpaper} from '@component';
import { like,dislike } from '../actions';


class ItemScreen extends Component {
  static navigationOptions = ({navigation})=>({
    title: navigation.state.params.title,
    headerRight: (
      <ButtonLogout onPress={()=>navigation.popToTop()}/>
   )
  })


  render() {
    const {title,fullDescription} =this.props.navigation.state.params;
    const {like,dislike,likes,dislikes} = this.props;
    const uri = CountriesFlags[title.replace(/\s+/g, "_").toLowerCase()];
    return (
      <Wallpaper>
      <View style={styles.container}>
        <View style={styles.dataContainer}>
          <Image source={uri} style={styles.image} />
          <Text style={styles.fullDescription}>{fullDescription}</Text>
        </View>
        <VoteTool likes={likes} dislikes={dislikes} onLike={()=>like(title)} onDislike={()=>dislike(title)}/>
      </View>
      </Wallpaper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
    padding: 10,

  },
  dataContainer: {
    flex:1,
    alignItems: 'center',


  },

  image: {
    width: 150,
    height: 150,
    marginTop: 10,
  },
  fullDescription: {
    color: 'black',
    fontWeight: 'bold',
    fontSize:20,
    marginTop: 10,
  },

});


const mapStateToProps = (state,ownProps) => {
  const {title} =ownProps.navigation.state.params;
  const votes = state.voteReducer[title];
  return {
    likes:votes?votes.likes:0,
    dislikes:votes?votes.dislikes:0
  }
}

const mapDispatchToProps = {
  like,dislike
}



export default connect(mapStateToProps, mapDispatchToProps)(ItemScreen)
