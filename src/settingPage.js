import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Card, IconButton, Avatar, Appbar} from 'react-native-paper';

const settingPage = () => {
  return (
    <>
      <Appbar.Header style={{backgroundColor: '#969cba'}}>
        <Appbar.Content title="Setting" titleStyle={{color:'white'}} />
      </Appbar.Header>
      <TouchableOpacity onPress={() => {}}>
        <Card style={styles.card} pointerEvents="none">
          <Card.Title
            title="Profile"
            titleStyle={{fontSize: 15}}
            left={props => <IconButton {...props} icon="profile" size={25} />}
            right={props => <IconButton {...props} icon="right" />}
          />
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Card style={styles.card} pointerEvents="none">
          <Card.Title
            title="Bluetooth"
            titleStyle={{fontSize: 15}}
            left={props => <IconButton {...props} icon="bluetooth" size={25} />}
            right={props => <IconButton {...props} icon="right" />}
          />
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Card style={styles.card} pointerEvents="none">
          <Card.Title
            title="Rename Device"
            titleStyle={{fontSize: 15}}
            left={props => <IconButton {...props} icon="upcircleo" size={25} />}
            right={props => <IconButton {...props} icon="right" />}
          />
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Card style={styles.card} pointerEvents="none">
          <Card.Title
            title="Export Data"
            titleStyle={{fontSize: 15}}
            left={props => <IconButton {...props} icon="export" size={25} />}
            right={props => <IconButton {...props} icon="right" />}
          />
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Card style={styles.card} pointerEvents="none">
          <Card.Title
            title="Log Out"
            titleStyle={{fontSize: 15}}
            left={props => <IconButton {...props} icon="logout" size={25} />}
            right={props => <IconButton {...props} icon="careright" />}
          />
        </Card>
      </TouchableOpacity>
    </>
  );
};

export default settingPage;
const styles = StyleSheet.create({
  card: {
    marginTop: 0.5,
  },
});
