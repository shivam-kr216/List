import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  //console.log(props);
  return <View>
    <Text style={styles.text}>Hello bro</Text>

    <Button
      onPress={() => navigation.navigate('Components')}
      title="Go to Components Demo"
    />

    <Button
      onPress={() => navigation.navigate('List')}
      title="Go to List Demo"
    />

    <Button
      onPress={() => navigation.navigate('Image')}
      title="Go to Image Demo"
    />

    <Button
      onPress={() => navigation.navigate('Conter')}
      title="Go to Counter Demo"
    />

    <Button
      onPress={() => navigation.navigate('Color')}
      title="Go to Color Demo"
    />

    <Button
      onPress={() => navigation.navigate('Square')}
      title="Go to Square Demo"
    />

    {/*<TouchableOpacity onPress={() => props.navigation.navigate('List')}>
      <Text>Go to List Demo</Text>
      We can add multiple text as below lines are also correct
     <Text>Go to List Demo</Text>
      <Text>Go to List Demo</Text>
    </TouchableOpacity>*/}

  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
