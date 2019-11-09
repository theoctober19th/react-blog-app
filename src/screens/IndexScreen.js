import React, {Component, useContext} from 'react';

import {
  StyleSheet,
  View,
  Text,
  FlatList
} from 'react-native';

import {blogs} from '@data/dummydata';

import {Context as BlogContext} from '@context/BlogContext';

import BlogRowItem from '@components/BlogRowItem';

const IndexScreen = ({navigation}) => {

  const {state, addBlogPost, deleteBlogPost}  = useContext(BlogContext);
  //const addBlogPost = value.addBlogPost;
  //const posts = value.blogPosts;

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
};

const styles = StyleSheet.create({
  global_container: {
    flex: 1,
  },
});

export default IndexScreen;
