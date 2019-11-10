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
    justifyContent: 'space-between',
    flex:1
  },
  title:{
    flex:9,
    fontSize: 20,
    marginLeft: 10,
    marginRight: 50,
    textAlignVertical: 'center',
    paddingTop: 10,
  },
  icon:{
    position: 'absolute',
    right: 10,
    bottom: 1,
    flex:1
  }
});

export default BlogRowItem;
