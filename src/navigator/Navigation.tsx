import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../presentation/screens/home/HomeScreen';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default Navigator;