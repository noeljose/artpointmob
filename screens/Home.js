import React, {useState} from "react";
import { Text, View, Image , StyleSheet, ScrollView, Dimensions} from "react-native";



export default function Home(){

    const [sliderImages, setSliderImages] = useState([
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F07%2F3D-Nature-Images.jpg",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F07%2F3D-Nature-Images.jpg",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F07%2F3D-Nature-Images.jpg"
    ])

    const [product, setProduct] = useState([
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F07%2F3D-Nature-Images.jpg",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F07%2F3D-Nature-Images.jpg",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F07%2F3D-Nature-Images.jpg",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F07%2F3D-Nature-Images.jpg",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F07%2F3D-Nature-Images.jpg",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F07%2F3D-Nature-Images.jpg",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F07%2F3D-Nature-Images.jpg",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F07%2F3D-Nature-Images.jpg",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F07%2F3D-Nature-Images.jpg",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F07%2F3D-Nature-Images.jpg",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F07%2F3D-Nature-Images.jpg",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F07%2F3D-Nature-Images.jpg",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F07%2F3D-Nature-Images.jpg",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F07%2F3D-Nature-Images.jpg"
    ])
    


    return(
       
       <View>

           <ScrollView pagingEnabled horizontal>

               {
                sliderImages.map((image, index)=>{
                   return <Image key={index} source={{ uri: image }}  style={styles.image} />                
                })
               }

           </ScrollView>

           <Text style={styles.text}> ←← Scroll to view →→ </Text>

           <ScrollView>
          
               <View style={styles.view}>
               {     product.map((image, index)=>{
                   return <Image key={index} source={{ uri: image }}  style={styles.pdtimage} />                
                })
               }
               </View>
           </ScrollView>
          
       </View>

    );
}


const styles = StyleSheet.create({
    image: {
        width: Dimensions.get("window").width-10,
        marginLeft: 5,
        marginRight: 5,
        height:Dimensions.get("window").height * 0.4,
    },
    pdtimage: {
        width: Dimensions.get("window").width/3,
        height:Dimensions.get("window").width/3,
        margin: 20
    },
    text: {
        textAlign: "center"
    },

    view: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: 350
    }
})