import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

const EditScreen = () => {
  return(
      <View style={styles.global_container}>
        <Text style={styles.titleText}> Title: </Text>
        <TextInput style={styles.titleInput}
          placeholder='Title'
        />
        <Text style={styles.titleText}> Content </Text>
        <TextInput style={styles.contentInput}
          placeholder='Content'
          multiline
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
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
    paddingLeft: 10
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

export default EditScreen;
