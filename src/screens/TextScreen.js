import React, { useState } from 'react'
import {View, Text, StyleSheet, TextInput } from 'react-native'


const TextScreen = () => {
    const [name, setName ] = useState('');
    return <View>
        <Text>Enter name:</Text>
        <TextInput
            onChangeText={( newValue ) => setName(newValue) }
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={ name }
        />
        <Text>My Name is { name }</Text>
        { name.length < 6 ? <Text>Password must be longer than 5 chars</Text> : null }
    </View>
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        //backgroundColor: '#3442FA'
    }
})

export default TextScreen
