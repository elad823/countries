import React, {Component} from 'react';
import {FlatList} from 'react-native';
import { connect } from 'react-redux';
import {Wallpaper,Card} from '@component';

class MainScreen extends Component {
  static navigationOptions = ({navigation})=>({
    headerRight: (
      <ButtonLogout onPress={()=>navigation.popToTop()}/>
   )
  })


  render() {
    return (
      <Wallpaper>
      <FlatList style={{margin:5, marginTop:20}}
          data={this.props.countries}
          numColumns={2}
          keyExtractor={(item, index) =>index }
          renderItem={(item) =>
            <Card {...item.item}
                  onPress ={() => this.props.navigation.navigate('Item',{...item.item})}
            />}
        />
      </Wallpaper>
    );
  }
}


const mapStateToProps = (state) => ({
    countries:state.countryReducer.countries
})




export default connect(mapStateToProps)(MainScreen)
