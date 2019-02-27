import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';

import bgSrc from '../images/wallpaper.png';

export default Wallpaper =({children})=>(
      <ImageBackground  style={styles.picture} source={bgSrc}>
        {children}
      </ImageBackground>
    )

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    resizeMode: 'cover',
  },
});
