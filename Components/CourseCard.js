import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { add } from '../Redux/Cart/actions';
import { useDispatch, useSelector } from 'react-redux';


export default function CourseCard({ Course }) {
    const navigation = useNavigation();
    const {items} = useSelector(state => state.cart)
    const dispatch = useDispatch();
    const addItem = () => {
        if (items.includes(Course)) {
            alert('Course already in cart')
            return
        }
        dispatch(add(Course))
        alert('Course added to cart')
    }
    return (
        <View style={CourseCardStyle.container}  >
            <View style={{ alignItems: 'center' }}>
                <Image source={{ uri: Course.image }} style={CourseCardStyle.img} />
            </View>
            <View style={{ backgroundColor: 'white', paddingBottom: 15 }}>

                <Text style={CourseCardStyle.CourseName} >{Course.title}</Text>
                <Text style={CourseCardStyle.Price} >{Course.price}</Text>
                <View style={CourseCardStyle.detail}>
                    <Pressable onPress={() => navigation.navigate("Course", { Course })}>
                        <Ionicons name="eye" size={30} color="green" />
                    </Pressable>
                    <Pressable onPress={() => addItem()} disabled={items.includes(Course)}>
                        <Ionicons name="basket" size={30} color="green" />
                    </Pressable>
                </View>
            </View>
        </View>
    )
}
const CourseCardStyle = StyleSheet.create({
    container: {
        borderRadius: 10,
        width: 350
    },
    CourseName: {
        textAlign: 'center',
        paddingTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green'
    },
    Price: {
        textAlign: 'center',
        paddingBottom: 10,
        fontSize: 20,
        color: 'black',
        fontWeight: 'semibold'
    },
    img: {
        width: 350,
        height: 220,
    },
    detail: {
        fontSize: 20,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

});
