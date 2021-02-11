import React from 'react'
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetails = ({ imageSource, title, imageScore }) => {
    return (
      <View>
        <Image source={imageSource} />
        <Text>{title}</Text>
        <Text>Image score - {imageScore}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
      fontSize: 30
    }
  });

export default ImageDetails;