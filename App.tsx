/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-devsettings';
import {store} from 'shared/redux';
import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {ReduxPage} from 'pages';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <StatusBar barStyle="light-content" />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <ReduxPage />
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
}

export default App;
