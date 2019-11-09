import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import IndexScreen from '@screens/IndexScreen';
import CreateScreen from '@screens/CreateScreen';
import EditScreen from '@screens/EditScreen';
import ShowScreen from '@screens/ShowScreen';

import {Provider as BlogProvider} from '@context/BlogContext';

const rootNavigator = createStackNavigator(
  {
    Index: {
      screen: IndexScreen,
      navigationOptions: () => ({
        title: 'Blog App'
      })
    },
    Create: {
      screen: CreateScreen,
      navigationOptions: () => ({
        title: 'Create New Blog'
      })
    },
    Edit: {
      screen: EditScreen,
      navigationOptions: () => ({
        title: 'Edit Blog'
      })
    },
    Show: {
      screen: ShowScreen,
      navigationOptions: () => ({
        title: 'Show Blog'
      })
    }
  },
  {
    initialRouteName: 'Index',
  }
);

const App = createAppContainer(rootNavigator);

export default () => {
  return (
    <BlogProvider>
       <App />
    </BlogProvider>
  );
}
