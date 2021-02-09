import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    //first way for key declaration
    const friends = [
        { name: 'friends #1', key: '1', age: 20 },
        { name: 'friends #2', key: '2', age: 21 },
        { name: 'friends #3', key: '3', age: 22 },
        { name: 'friends #4', key: '4', age: 23 },
        { name: 'friends #5', key: '5', age: 24 },
        { name: 'friends #6', key: '6', age: 25 },
        { name: 'friends #7', key: '7', age: 26 },
        { name: 'friends #8', key: '8', age: 27 },
        { name: 'friends #9', key: '9', age: 28 },
    ]
    return (
        /*<FlatList data={friends} renderItem={(element) => {
            ///element === { item: { name: 'friends #1' }, index: 0 }
        }} />*/

        //Second way
        <FlatList
            //horizontal
            //showsHorizontalScrollIndicator = { false }
            keyExtractor={ (friend) => friend.name }
            data={friends}
            renderItem={({ item }) => {
                ///item === { name: 'friends #1' }, index: 0 
                return <Text style={ styles.textStyle }>{item.name} - Age { item.age }</Text>
            }} />
    )
}

const styles = StyleSheet.create(
    {
        textStyle: {
            marginVertical: 50
        }
    }
);

export default ListScreen;