import React from 'react'
import { View, Text, TouchableOpacity , StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';


export default function CartCourse({Course}) {
  return (
    <View style={{backgroundColor:'white', flexDirection:'row', justifyContent:'space-around' ,alignItems:'center',marginHorizontal:10, borderRadius:10, paddingVertical:8}}>
        <Text style={styles.text}  >{Course.title}</Text>
        <Text style={styles.text} >{Course.price}£</Text>
        <TouchableOpacity 
        // onPress={{}}
        >
            <Ionicons name="trash" size={30} color="green" />  
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    text:{ fontSize: 18, fontWeight: 'semibold', color: 'black' }
})
