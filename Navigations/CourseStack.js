import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Drawer from './Drawer';
import Panier from '../Screens/Panier';
import { Provider } from 'react-redux';
import Course from '../Components/Course';
import Achats from '../Screens/Achats';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function CourseStack() {
  const Stack = createStackNavigator();
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Drawer" component={Drawer} options={{ headerShown: false }} />
      <Stack.Screen options={({ route }) => ({
        title: route.params.Course.title,
        headerRight: () => (
          <TouchableOpacity onPress={
            () => navigation.navigate('Panier')

          } >
            <Ionicons style={{ paddingRight: 10 }} name="cart" size={30} color="white" />
          </TouchableOpacity>
        ),
        headerStyle: {
          backgroundColor: 'green',
        },

        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      })}

        name="Course" component={Course} />
      <Stack.Screen options={{
        headerRight: () => (

          <Ionicons style={{ paddingRight: 10 }} name="cart" size={30} color="white" />
        ),
        title: 'Cart',
        headerStyle: {
          backgroundColor: 'green'
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: 'white',
        }
      }} name="Panier" component={Panier} />
      {/* <Stack.Screen name="Achats" component={Achats} /> */}
    </Stack.Navigator>
  )
}
