import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Card, Title, Button} from 'react-native-paper';

const locator = () => {
  return (
    <>
      <View>
        <Text style={styles.topText}>Let's Start </Text>
      </View>
      <Image source={require('../images/location.png')} style={styles.image} />
      <View>
        <Text style={styles.paragraph}>Keep Your Inhaler With You </Text>
      </View>
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => console.log('pressed')}>
        Locate Your Device
      </Button>
    </>
  );
};

export default locator;
const styles = StyleSheet.create({
  topText: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop: 100,
    color: 'black',
  },
  button: {
    margin: 50,
    color: 'rgba(40,60,161,0.4)',
  },
  image: {
    marginTop: '20%',
    alignSelf: 'center',
    height: 250,
    width: 200,
  },
  paragraph: {
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    paddingTop: 110,
  },
});
