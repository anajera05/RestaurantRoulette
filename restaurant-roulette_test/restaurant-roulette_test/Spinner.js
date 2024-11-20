import * as React from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import {useEffect} from 'react';

SplashScreen.preventAutoHideAsync();


const Spinner = ({ navigation }) => {
  const [loaded, error] = useFonts({
    'Grand_Casino_Demo': require('./assets/fonts/Grand_Casino_Demo.otf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Spinner</Text>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  titleText: {
    fontFamily: 'Grand_Casino_Demo',
    color: '#B3ADFF',
    textAlign: 'center',
    fontSize: 48,
    letterSpacing: 3
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Spinner;