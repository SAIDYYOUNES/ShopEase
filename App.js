import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import CourseStack from './Navigations/CourseStack';
import store from './Redux/Store';
export default function App() {
  
  return (
    <Provider store={store}>
      <NavigationContainer>
       <CourseStack />
      </NavigationContainer>
    </Provider>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
