import * as React from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import {useEffect} from 'react';


SplashScreen.preventAutoHideAsync();


const LandingPage = ({ navigation }) => {
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
        <View>
          <Text style={styles.titleText}>Restaurant</Text>
          <Text style={styles.titleText}>Roulette</Text>
        </View>
        <View style={{paddingTop: 20}}>
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => navigation.navigate('Spinner')}>
            <Text style={styles.startButtonText}>Spin</Text>
          </TouchableOpacity>
        </View>
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
  startButton: {
    backgroundColor: '#D9D9D9',
    padding: 10,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 25,
  },
  startButtonText: {
    fontFamily: 'Grand_Casino_Demo',
    color: '#1A1A1A',
    textAlign: 'center',
    fontSize: 32,
    letterSpacing: 3
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LandingPage;