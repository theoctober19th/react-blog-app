import React, {Component, useContext, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import {Context as BlogContext} from '@context/BlogContext';

const CreateScreen = ({navigation}) => {

  const {addBlogPost} = useContext(BlogContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return(
      <View style={styles.global_container}>
        <Text style={styles.titleText}> Title: </Text>
        <TextInput style={styles.titleInput}
          placeholder='Title'
          value={title}
          onChangeText={(newtext) => setTitle(newtext)}
        />
        <Text style={styles.titleText}> Content </Text>
        <TextInput style={styles.contentInput}
          placeholder='Content'
          value={content}
          onChangeText={(newtext) => setContent(newtext)}
          multiline
        />
        <KeyboardAvoidingView>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              addBlogPost(title, content);
              navigation.navigate('Index');
            }}
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
  );
};

const styles = StyleSheet.create({
  global_container: {
    flex: 1,
    margin: 10,
  },
  titleText: {
    fontSize: 20,
    marginTop: 40
  },
  titleInput:{
    fontSize: 20,
    backgroundColor: '#cecece',
    borderRadius: 10,
    padding: 10
  },
  contentInput:{
    padding: 15,
    height: 200,
    backgroundColor: '#cecece',
    borderRadius: 10,
    textAlignVertical: 'top'
  },
  button:{
    marginTop: 10,
    backgroundColor: '#6a1b9a',
    height: 50,
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  buttonText:{
    color: 'white',
    alignSelf: 'center',
    fontSize:20
  }

});

export default CreateScreen;
