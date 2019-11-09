import React, {Component, useContext} from 'react';

import {
  StyleSheet,
  View,
  Text,
  FlatList, Button, TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import {blogs} from '@data/dummydata';

import {Context as BlogContext} from '@context/BlogContext';

import BlogRowItem from '@components/BlogRowItem';
import EmptyView from '@components/EmptyView';

const IndexScreen = ({navigation}) => {

  const {state, addBlogPost, deleteBlogPost}  = useContext(BlogContext);
  //const addBlogPost = value.addBlogPost;
  //const posts = value.blogPosts;

  if(state.length == 0){
    return(
      <EmptyView />
    )
  }else{
    return(
        <View style={styles.global_container}>
          <FlatList
            data={state}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <BlogRowItem
                title = {item.title}
                onTextTap = {() => navigation.navigate('Show', {id: item.id}) }
                onDeleteTap = {() => deleteBlogPost(item.id)}
              />
            )}
          />
        </View>
    );
  }
};

IndexScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: (
      <TouchableOpacity
        style={{marginRight: 20}}
        onPress={() => navigation.navigate('Create')}
      >
        <Icon name='plus' size={25} color={'#ff0000'}/>
      </TouchableOpacity>
    )
  };
}

const styles = StyleSheet.create({
  global_container: {
    flex: 1,
  },
});

export default IndexScreen;
