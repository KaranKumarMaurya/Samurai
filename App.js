import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Appbar, Card, Title, Paragraph} from 'react-native-paper';

const App = () => {
  return (
    <>
      <Appbar.Header style={{backgroundColor: '#969cba'}}>
        <Appbar.Content title="Smart Inhaler" titleStyle={{color: '#969CBA'}} />
      </Appbar.Header>
      <Card style={styles.topCard}>
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
      </Card>
      <View style={styles.container}>
        <Card style={styles.redbox}>
          <Card.Content>
            <Title>Health</Title>
            <Paragraph>Good</Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.redbox}>
          <Card.Content>
            <Title>Puff Counter</Title>
            <Paragraph>5</Paragraph>
          </Card.Content>
        </Card>
      </View>
      <View style={styles.container}>
        <Card style={styles.bluebox}>
          <Card.Content>
            <Title>Weather</Title>
            <Paragraph>Good</Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.bluebox}>
          <Card.Content>
            <Title>Shaking</Title>
            <Paragraph>Well</Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.bluebox}>
          <Card.Content>
            <Title>Find</Title>
          </Card.Content>
        </Card>
      </View>
      <Card style={styles.blackbox}>
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
      </Card>
    </>
  );
};

export default App;
const styles = StyleSheet.create({
  topCard: {
    
    height: 200,
    marginBottom: 10,
    backgroundColor: '#969CBA',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  redbox: {
    width: 190,
    height: 120,
    marginTop: 30,
    elevation: 4,
    borderRadius: 10,
  },
  bluebox: {
    borderRadius: 10,
    width: 120,
    height: 120,
    marginTop: 20,
    elevation: 4,
  },
  blackbox: {
    height: 500,
    elevation: 50,
    marginTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
