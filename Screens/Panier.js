import React from 'react'
import { FlatList, ScrollView, Text, View, Pressable } from 'react-native'
import CartCourse from '../Components/CartCourse'
import { useSelector, useDispatch } from 'react-redux'
import { addPayement } from '../Redux/payement/actions'
import { clear } from '../Redux/Cart/actions'
export default function Panier() {

  const { items, totalAmount } = useSelector(state => state.cart)
  
  const dispatch = useDispatch();
  function paye() {
    if (items.length == 0) {

      return
    }
    dispatch(addPayement(items))
    dispatch(clear())

    alert('Paiement effectué')
  }
  return (
    <View >
      <ScrollView>
        {items.map((course) =>
          <View style={{ paddingVertical: 10 }} key={course.id}>

            <CartCourse key={course.id} Course={course} />
          </View>
        )}
      </ScrollView>
      <View style={{ height: 200 }} >

        <View style={{ backgroundColor: 'transparent', width: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-end', paddingRight: 30, paddingTop: 20, paddingBottom: 8 }}>
          <Text style={{ textAlign: 'center', padding: 10, width: 100, borderRadius: 10 }}>Total :<Text style={{ color: 'green' }}>{totalAmount}</Text></Text>
          <Pressable
            onPress={paye}
          >
            <Text style={{ textAlign: 'center', padding: 10, backgroundColor: 'orange', width: 100, borderRadius: 10 }}>Payer</Text>
          </Pressable>
        </View>

      </View>
    </View>
  )
}
