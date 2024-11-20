import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './LandingPage';
import Spinner from './Spinner';

const Stack = createNativeStackNavigator();

const RestaurantRoulette = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>    
    
        <Stack.Screen name="LandingPage" component={LandingPage} />
         <Stack.Screen name="Spinner" component={Spinner}  options={{ 
            animation: 'fade_from_bottom'
          }}/>
     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RestaurantRoulette;