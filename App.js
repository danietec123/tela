import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './src/components/screens/HomeScreen';
import FabButton from './src/components/componentes/FabButton';


const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
      <FabButton style={{ bottom: 80, right: 60 }} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;

