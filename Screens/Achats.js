import React from 'react'
import { FlatList, Text ,View } from 'react-native'
import COURSES from '../Data/Courses'
import PaymentRecord from '../Components/PayementRecord'
import { useSelector } from 'react-redux'
export default function Achats() {
  
  const {payements} = useSelector(state => state.payement)
  return (
    <View style={{
      backgroundColor: '#f5f5f5',
      paddingTop: 20,
    }}>
{
  !payements.length>0 ? 
  <Text style={{textAlign:'center', fontSize:20, fontWeight:'bold', color:'green'}}>Aucun achat effectué</Text>
  :

      <FlatList
        data={payements}
        renderItem={({ item }) => <PaymentRecord Course={item} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 40 }} />}
      />
}
    </View>
  )
}
