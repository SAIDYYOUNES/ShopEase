import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function PayementRecord({ Course }) {
  const [disabled, setDisabled] = useState(true)
  return (
    <View style={{ backgroundColor: 'white', marginHorizontal: 10, borderRadius: 10 }}>

      <View style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginHorizontal: 10, borderRadius: 10, paddingVertical: 8 }}>
        <Text style={styles.text}  >{Course.date}</Text>
        <Text style={styles.text} >{Course.totalAmount}£</Text>

      </View>
      <View style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginHorizontal: 10, borderRadius: 10, paddingVertical: 8, paddingRight: 15 }}>
        <TouchableOpacity onPress={() => setDisabled(!disabled)}>
          {disabled ? (
            <Ionicons name="add-circle" size={30} color="green" />
          ) : (
            <Ionicons name="remove-circle" size={30} color="green" />
          )}
        </TouchableOpacity>
      </View>

      {!disabled && (
        <View>
          <View style={{ borderTopColor: 'Black', borderTopWidth: 2, width: 350, alignSelf: 'center' }}></View>

          {Course.items.map((Course) =>

            <View key={+Course.id} style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginHorizontal: 10, borderRadius: 10, paddingVertical: 8 }}>
              <Text style={styles.text}  >{Course.title}</Text>
              <Text style={styles.text} >{Course.price}£</Text>
            </View>)}

        </View>
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  text: { fontSize: 18, fontWeight: 'semibold', color: 'black' }
})
