import React, {Component, useContext} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'

import {Context as BlogContext} from '@context/BlogContext';

const ShowScreen = ({navigation}) => {
  const id = navigation.getParam('id');
  const {state} = useContext(BlogContext);
  const blog = state.find((item) => item.id === id);

  return(
      <View style={styles.global_container}>
        <Text style={styles.title}> {blog.title} </Text>
        <Text style={styles.content}>
          {blog.content}
        </Text>
      </View>
  );
};

ShowScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: (
      <TouchableOpacity
        style={{marginRight: 20}}
        onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}
      >
        <Icon name='pencil' size={25} color={'#ff0000'}/>
      </TouchableOpacity>
    )
  };
}

const styles = StyleSheet.create({
  global_container: {
    backgroundColor: '#cecece',
    padding: 10,
    justifyContent: 'space-between'
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20
  },
  content:{
    marginVertical: 20,

  }
});

export default ShowScreen;
