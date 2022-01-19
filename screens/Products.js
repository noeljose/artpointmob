import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Dimensions, Button, Alert, SafeAreaView, Image, Modal } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import { API, IMG } from "../data";

export default function Products({navigation}){

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([]);

    const [open2, setOpen2] = useState(false);
    const [value2, setValue2] = useState(null);
    const [items2, setItems2] = useState([]);

    const [skip, setSkip] = useState(0)
    const [count, setCount]  = useState(0)
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        setSkip(0)
    }, [value, value2])

    useEffect(async () => {
        await fetch(`${API}/products/category/list`,{
            method: "post"
        })
        .then(response => response.json())
        .then(json =>{
            let cat = []
            let sub = []
            json.data.map((category, index)=>{
                cat = [...cat, {
                    label: category.category,
                    value: category.category
                }]
                sub = [...sub, {
                    label: category.subCategory,
                    value: category.subCategory
                }]       
            })
            setItems([...cat])
        })    
        return () => {
            setItems([])
        }
    }, [])

    useEffect(async () => {      
        await fetch(`${API}/products/category/list`,{
            method: "post"
        })
        .then(response => response.json())
        .then(json =>{            
            let sub = []
            json.data.map((category, index)=>{          
                if (value == category.category) {
                    category.subCategory.map((s,i)=>{
                        sub = [...sub, {
                            label: s,
                            value: s
                        }]
                    })
                }
            })
            setItems2([...sub])
            
        })
        return () => { 
            setItems2([]) 
            setSkip(0)
        }
    }, [value])


    const handleSearch = async () =>{
        try {
            if (!value && !value2) { throw "At least Select a Category"}
            
            let requestBody = {
                category: value,
                skip: skip
            }
            value2? requestBody.subCategory = value2:null;
            await fetch(`${API}/products/list_by_category`,{
                method: "post",
                headers:{
                    "Content-Type" : "application/json"
                },
                body:JSON.stringify(requestBody)
            })
            .then(response => response.json())
            .then(json => {
                setSearchResult([...json.data])
                setCount(json.metadata.resultCount);
            })

        } catch (error) {       
                typeof error == 'string'? Alert.alert(error):Alert.alert("Somthing Went Wrong, Please Try again ")
        }
    }

    const handleLoadMore = ()=>{
        setSkip(skip+10)
    }

    const handleResult = ()=>{

        let data;
        if (count > 0) {
             data = searchResult.map((result, index)=>{
                
                return (
        
                        <View key={index} style={styles.pdt_container}>
                        <Image source={{uri: `${API}/${IMG}/${result.image}`}} style={styles.pdt_image}/>
                        <Text style={styles.pdt_title}>{result.title} </Text>
                        <Button onPress={()=>navigation.navigate("ViewProduct", { imageURI:`${API}/${IMG}/${result.image}` })} title="View"/>
                        <Button onPress={() => navigation.navigate("NewOrder", {product_details: result})} title="Get This"/>
                    </View>
                )
            })
        }else{
            return []
        }
        return data
    }



    return (
    <SafeAreaView>
       
        <View style={styles.container}>
            
            <View>
                <DropDownPicker
                    style={styles.dropdown}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder="Select Category"
                />
            </View>
        
            <View>
                <DropDownPicker
                style={styles.dropdown}
                    open={open2}
                    value={value2}
                    items={items2}
                    setOpen={setOpen2}
                    setValue={setValue2}
                    setItems={setItems2}
                    placeholder="Select Sub Category"
                />
            </View>

            <View style={{...styles.container,zIndex: -10, paddingTop: 10}}>
                <Button onPress={()=>{ handleSearch()}} title="Search"/>
            </View>

            <View style={styles.container}>
                {
                  handleResult()
                }
            </View>
            
            <View>
                {
                    count.length > skip?<Button onPress={()=>{ handleLoadMore()}} title="Load More"/>:null
                }
            </View>
            
        </View>

    </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container : {
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        width: Dimensions.get("screen").width,
        

    },
    dropdown:{
        width: Dimensions.get("screen").width/2 ,
    },
    pdt_image: {
        width: Dimensions.get("screen").width/2.5,
        height: Dimensions.get("screen").width/2.5,
        
    },
    pdt_container: {
        margin: 10
    },
    pdt_title: {
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "red",
        paddingTop: 2,
        paddingBottom:2,
        color:"#fff"
    }
})