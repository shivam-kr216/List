import React from 'react';
import { Text, StyleSheet, View } from "react-native";
import ImageDetails from '../components/ImageDetails';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetails title="Forest" imageSource={require('../../assets/forest.jpg')} imageScore={9} />
            <ImageDetails title="Beach" imageSource={require('../../assets/beach.jpg')} imageScore={7} />
            <ImageDetails title="Mountain" imageSource={require('../../assets/mountain.jpg')} imageScore={3} />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
      fontSize: 30
    }
  });

export default ImageScreen;