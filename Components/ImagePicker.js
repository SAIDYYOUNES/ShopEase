import React, { useState, useEffect } from 'react';
import { View, Button, Image, TextInput } from 'react-native';
import prompt from 'react-native-prompt-android';
import * as ImagePicker from 'expo-image-picker';


const ImagePickerPage = () => {
    const [imageSource, setImageSource] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const getPermission = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Camera permission required');
        }
    }
    useEffect(() => {
        getPermission()
    }, []);

    const handleCameraPress = async () => {
        const result = await ImagePicker.launchCameraAsync();
        console.log('Camera Result:', result);
        if (!result.cancelled) {
            resizeAndDisplayImage(result);
        }
    };
    const handleGalleryPress = async () => {
        const result = await ImagePicker.launchImageLibraryAsync();
        console.log('Gallery Result:', result);
        if (!result.cancelled) {
            resizeAndDisplayImage(result);
        }
    };
    const handleLinkPress = () => {
        console.log({uri:imageUrl})
    };

    const resizeAndDisplayImage = (data) => {
        const uri = data.assets[0].uri;
        console.log('Resized Image URI:', uri);
        setImageSource({ uri });
    };

    return (
        <View>
            {/* <Button title="Take Picture" onPress={()=>prompt(
                'Enter password',
                'Enter your password to claim your $1.5B in lottery winnings',
                [
                 {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                 {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
                ],
                {
                    type: 'secure-text',
                    cancelable: false,
                    defaultValue: 'test',
                    placeholder: 'placeholder'
                }
            )} /> */}
            
            <Button title="Take Picture" onPress={handleCameraPress} />
            <Button title="Choose from Gallery" onPress={handleGalleryPress} /> 
            <Button title="Type Link" onPress={handleLinkPress} />
            {imageSource && (
                <Image source={imageSource} style={{ width: 200, height: 200 }} />
            
            )}
            <TextInput
                placeholder="Enter Image Link"
                value={imageUrl}
                onChangeText={(text) => setImageUrl(text)}
            />
        </View>
    );
};

export default ImagePickerPage;

