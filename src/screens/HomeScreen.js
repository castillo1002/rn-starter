import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
    //console.log(props);
  return (
      <View>
        <Text style={styles.text}>Lets make a change</Text>
        <Button
            onPress={() => navigation.navigate('Components')}
            title="Go To Components Menu"
        />
        <Button
            title={'Go to List Demo'}
            onPress={() => navigation.navigate('List')}
        />
        <Button
              title={'Go to Image Screen'}
              onPress={() => navigation.navigate('Image')}
        />
          <Button
              title={'Go to Counter Screen'}
              onPress={() => navigation.navigate('Counter')}
          />
          <Button
              title={'Go to Color Screen'}
              onPress={() => navigation.navigate('Color')}
          />
          <Button
              title={'Go to Square Screen'}
              onPress={() => navigation.navigate('Square')}
          />
          <Button
              title={'Go to Text Screen'}
              onPress={() => navigation.navigate('Text')}
          />
          <Button
              title={'Go to Box Screen'}
              onPress={() => navigation.navigate('Box')}
          />
      </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: '#0d09ff',
    alignSelf: 'center',
    marginTop: 40,
    fontStyle: 'italic',
  }
});

export default HomeScreen;
