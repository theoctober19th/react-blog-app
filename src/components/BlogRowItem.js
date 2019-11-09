import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const BlogRowItem = ({title, onTextTap, onDeleteTap}) => {
  return(
      <View style={styles.global_container}>
      <TouchableOpacity style={{color: 'green'}} onPress={onTextTap}>
        <Text style={styles.title}> {title} </Text>
      </TouchableOpacity>
        <TouchableOpacity style={{color: 'green'}} onPress={onDeleteTap}>
          <Icon style={styles.icon} name='trash' size={30} color='red'/>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  global_container: {
    backgroundColor: '#cecece',
    height: 80,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title:{
    fontSize: 20,
    paddingLeft: 10,
  },
  icon:{
    paddingRight: 20
  }
});

export default BlogRowItem;
