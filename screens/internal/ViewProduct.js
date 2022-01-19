import React from 'react'
import { Image, View, StyleSheet, Dimensions, Button} from "react-native"
import PinchZoomView from 'react-native-pinch-zoom-view';

export default function ViewProduct({navigation, route}) {
    const {imageURI} = route.params

console.log(navigation);
    return (

       <>
        <PinchZoomView>
            <View>
                
                <Image resizeMode='contain' style={styles.image} source={{uri:imageURI}} />
            </View>

        </PinchZoomView>

        <Button onPress={()=>{navigation.navigate("Products")}} title='Go Back'/>

       </>
     
        
    )
}


const styles = StyleSheet.create({
    image: {
        width: Dimensions.get("screen").width,
        height:"100%"
        }
})


