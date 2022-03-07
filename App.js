import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Appbar, Card, Title, Paragraph} from 'react-native-paper';

const App = () => {
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Smart Inhaler" />
      </Appbar.Header>
      <Card>
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
      </Card>
      <View>
        <Text>Local Place</Text>
        <Text>Date Here</Text>
      </View>
      <View style={styles.container}>
        <Card style={styles.redbox}>
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.redbox}>
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
        </Card>
      </View>
      <View style={styles.container}>
        <Card style={styles.bluebox}>
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.bluebox}>
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.bluebox}>
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
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
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  redbox: {
    width: 190,
    height: 120,
    marginTop: 30,
  },
  bluebox: {
    width: 120,
    height: 120,
    backgroundColor: 'blue',
    marginTop: 20,
  },
  blackbox: {
    height: 500,
    elevation: 50,
    marginTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
