import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Panier from '../Screens/Panier';
import Achats from '../Screens/Achats';
import Catalogue from '../Screens/Catalogue';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, Text } from 'react-native';
import Camera from '../Screens/Camera';
export default function Drawer({ navigation }) {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: 'green',
            },
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Panier')}  >
                    <Ionicons name="cart" size={30} color="white" />
                </TouchableOpacity>
            ),
            headerRightContainerStyle: {
                paddingRight: 10
            },
           headerTintColor: 'white',
        }}>
            <Drawer.Screen options={{

                title: 'Landing',
                headerTitleStyle: {
                    color: 'white'
                },



                drawerIcon: () => <Ionicons name="book" size={30} color="black" />
            }} name="Catalogue" component={Catalogue} />
            <Drawer.Screen options={{
                title: 'Panier',
                drawerIcon: () => <Ionicons name="cart" size={30} color="black" />
            }} name="Phbjhanier" component={Panier} />
            <Drawer.Screen options={{
                title: 'Mes achats',
                headerStyle: {
                    backgroundColor: 'green'
                },
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: 'white',
                },
                drawerIcon: () => <Ionicons name="card" size={30} color="black" />
                
            }} name="Achats" component={Achats} />
            <Drawer.Screen
            name='camera' component={Camera}
            />
        </Drawer.Navigator>
    )
}
