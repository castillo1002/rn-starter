import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <View style={styles.viewOneStyle}></View>
        <View style={styles.viewTwoStyle}></View>
        <View style={styles.viewThreeStyle}></View>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        //borderWidth: 5,
        //borderColor: 'black',
        //height: 200,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },
    viewOneStyle: {
        //borderWidth: 3,
        borderColor: 'red',
        padding: 5,
        height: 50,
        width: 50,
        backgroundColor: 'red',
        //flex: 4,                   //this prop assigns a number that is proportional to the space avail.
        //alignSelf: 'stretch',    //this prop overrides the alignItems property from parent for single items
    },
    viewTwoStyle: {
        //borderWidth: 3,
        borderColor: 'red',
        padding: 5,
        height: 50,
        width: 50,
        top: 20,
        backgroundColor: 'green',
        //flex: 4,
        //...StyleSheet.absoluteFillObject    //shortcut for filling up parent area by child
    },
    viewThreeStyle: {
        //borderWidth: 3,
        borderColor: 'red',
        padding: 5,
        height: 50,
        width: 50,
        backgroundColor: 'blue',
        //flex: 2,
    }

})

export default BoxScreen
