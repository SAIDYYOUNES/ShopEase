import React from 'react'
import { View, FlatList } from 'react-native'
import CourseCard from '../Components/CourseCard'
import { useSelector } from 'react-redux'

export default function Catalogue() {
    const {courses} = useSelector(state => state.course)
    const {items} = useSelector(state => state.cart)
    const Courses = courses.filter(course => !items.includes(course))
    const renderSeparator = () => {
        return <View style={{ height: 40 }} />;
    };

    return (
        <View style={{ alignItems:'center', paddingTop:40 , backgroundColor:'#f5f5f5'}}>
            <FlatList
                data={Courses}
                renderItem={({item }) => <CourseCard Course={item} />}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={renderSeparator}
            />
        </View>
    )
}
