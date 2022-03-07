import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Appbar, Card, Title, Paragraph} from 'react-native-paper';
import moment from 'moment';

const App = () => {
  return (
    <>
      <Appbar.Header style={{backgroundColor: 'green'}}>
        <Appbar.Content title="Dashboard" />
      </Appbar.Header>
      <Card style={styles.topCard}>
        <Card.Content>
          <Title style={{fontSize: 25}}>Statistics</Title>
          <Paragraph style={{fontSize: 15, fontWeight: '600'}}>
            Local Place
          </Paragraph>
          <Paragraph>{moment().format('MMMM Do ,YYYY')}</Paragraph>
        </Card.Content>
      </Card>
      <View style={styles.container}>
        <Card style={styles.middleContainerOne}>
          <Card.Content>
            <Title style={[styles.title]}>Health</Title>
            <Paragraph style={styles.subtitle}>Good</Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.middleContainerOne}>
          <Card.Content>
            <Title style={styles.title}>Puff Counter</Title>
            <Paragraph style={styles.subtitle}>5</Paragraph>
          </Card.Content>
        </Card>
      </View>
      <View style={styles.container}>
        <Card style={styles.middleContainerTwo}>
          <Card.Content>
            <Title style={styles.title}>Weather</Title>
            <Paragraph style={styles.subtitle}>Good</Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.middleContainerTwo}>
          <Card.Content>
            <Title style={styles.title}>Shaking</Title>
            <Paragraph style={styles.subtitle}>Well</Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.middleContainerTwo}>
          <Card.Content>
            <Title style={styles.title}>Find Device</Title>
          </Card.Content>
        </Card>
      </View>
      <Card style={styles.lastContainer}>
        <Card.Content>
          <Title style={styles.title}>Daily Puffs</Title>
        </Card.Content>
      </Card>
    </>
  );
};

export default App;
const styles = StyleSheet.create({
  topCard: {
    height: 150,
    margin: 10,
    borderRadius: 10,
    elevation: 4,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  middleContainerOne: {
    width: 190,
    height: 120,
    marginTop: 10,
    elevation: 4,
    borderRadius: 10,
  },
  middleContainerTwo: {
    borderRadius: 10,
    width: 120,
    height: 120,
    marginTop: 20,
    elevation: 4,
  },
  lastContainer: {
    height: 500,
    elevation: 10,
    marginTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  title: {
    fontSize: 18,
  },
  subtitle: {
    fontSize: 15,
  },
});
