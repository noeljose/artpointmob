import React, {useState, useEffect} from "react";
import { Text, View, Image , StyleSheet, ScrollView, Dimensions, Button, SafeAreaView} from "react-native";
import Version from "../components/Version";
import {API, IMG} from "../data"



export default function Home({navigation}){



    const [product, setProduct] = useState([])

    useEffect(async ()=>{

      await fetch(`${API}/products/list_product`)
    .then((response) => response.json())
    .then((json) => {
        let data =  json.data.map((pdt,i)=>{
            return  `${API}/${IMG}/${pdt.image}`
        })

        setProduct([ ...data])
    })
    .catch((error) => {
      console.error(error);
    });
    },[])



    return(
       
       <SafeAreaView >
     
          

         

            <ScrollView>

                <ScrollView pagingEnabled horizontal showsHorizontalScrollIndicator={false}>
                    <Image source={require("../assets/banner/1.png")}  style={styles.image} />  
                    <Image source={require("../assets/banner/2.png")}  style={styles.image} />  
                    <Image source={require("../assets/banner/3.png")}  style={styles.image} />  
                </ScrollView >

                    <Text style={styles.text}> ←← Scroll to view →→ </Text>
                    <Text style={styles.heading}>Welcome To Artpoint</Text>
                    <Text style={styles.heading2}>View Our Latest Collections</Text>
                    
                    <View style={styles.view}>
                        {     product.map((image, index)=>{
                            return <Image key={index} source={{ uri: image }}  style={styles.pdtimage} />                
                        })
                        }
                       
                    </View>
                    <View>
                        <Button onPress={()=>navigation.navigate("Products")} style={styles.btn} title="Show More"/>
                        </View>

                        <View>
                        <Text style={styles.heading3}>About Us</Text>
                        <Text style={styles.para}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </Text>
                        <Text style={styles.para}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </Text>
                        </View>

                    <Version/>
            </ScrollView>

               
          
           
          
       
       </SafeAreaView>

    );
}


const styles = StyleSheet.create({
    heading :{
        textAlign:"center",
        fontSize:22,
        color:"red",
        textTransform:"uppercase",
        letterSpacing:2,
        fontWeight: "bold"
    },

    btn : {
        paddingBottom: 350
    },
    
    heading2 :{
        marginTop: 10,
        textAlign:"center",
        fontSize:18,
        color:"white",
        textTransform:"uppercase",
        letterSpacing:2,
        fontWeight: "bold",
        backgroundColor: "red",
        paddingTop: 10,
        paddingBottom: 10
    },

    heading3 :{
        textAlign:"left",
        fontSize:22,
        color:"red",
        textTransform:"uppercase",
        letterSpacing:2,
        fontWeight: "bold"
    },

    para: {
        textAlign: "justify",
        marginTop: 20
    },

    image: {
        width: Dimensions.get("window").width-10,
        marginLeft: 5,
        marginRight: 5,
        height:Dimensions.get("window").height * 0.4,
       
        
    },
    pdtimage: {
        width: Dimensions.get("window").width/3,
        height:Dimensions.get("window").width/3,
        margin: 20,
        padding:10,
        borderWidth: 1,
        borderColor: "blue"
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

    },
    v_m: {
        marginTop: 10,
        marginBottom: 10
    }
})