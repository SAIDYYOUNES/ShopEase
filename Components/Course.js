import React from 'react'
import { Text, Image, StyleSheet, ScrollView, View, TouchableOpacity, Pressable } from 'react-native'
import { add } from '../Redux/Cart/actions';
import { useDispatch ,useSelector } from 'react-redux';


export default function Course({ route }) {
    const {items} = useSelector(state => state.cart)
    const dispatch = useDispatch();
    const { Course } = route.params;
    const addItem = () => {
        if (items.includes(Course)) {
            alert('Course already in cart')
            return
        }
        dispatch(add(Course))
        alert('Course added to cart')
    }

    return (
        <>
            <ScrollView style={styles.container} >
                <Image source={{ uri: Course.image }} style={styles.image} />
                <Text style={styles.desc}>{Course.description}</Text>

            </ScrollView>
            <View style={styles.buttonContainer}>
                <View style={{ backgroundColor: 'gray', width: '100%' }}>
                    <Text style={styles.price}>{Course.price}£</Text>
                </View>
                <View style={{ backgroundColor: 'green', width: '100%', alignItems: 'flex-end', paddingRight: 30, paddingTop: 20 ,paddingBottom:8 }}>
                    <Pressable onPress={() => addItem()} disabled={items.includes(Course)}>
                        <Text style={{ textAlign: 'center', padding: 10, backgroundColor: 'yellow', width: 100, borderRadius: 10 }}>Add to Cart</Text>
                    </Pressable>
                </View>

            </View>
        </>
    );
};


const styles = StyleSheet.create({
    container: {
        // position: 'relative'
    },
    image: {
        width: '100%',
        height: 300,
        alignSelf: 'center',
    },
    name: {
        paddingBottom: 20,

        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 15,
        color: 'white',

    },
    price: {
        paddingRight: 20,
        paddingVertical: 10,
        textAlign: 'right',
        fontSize: 30,
        marginTop: 10,
        fontWeight: 'bold',
        color: 'green'

    },
    desc: {
        paddingTop: 20,
        paddingBottom: 20,
        lineHeight: 28,
        fontSize: 20,
        fontWeight: 'semibold',
        paddingHorizontal: 20,
    },
    buttonContainer: {
        
        
        width: '100%',
        alignItems: 'center',
        // marginBottom: 20,
    },
    button: {

        backgroundColor: 'yellow',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
