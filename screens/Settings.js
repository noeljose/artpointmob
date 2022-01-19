import React, {useState, useEffect} from "react";
import { API } from "../data";
import { Text, View, TextInput ,Button, StyleSheet, Dimensions, Alert} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import localStorage from "@react-native-async-storage/async-storage"
import Version from "../components/Version";


export default function Home({navigation}){

    const [id, setId] = useState("")
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")


    const [details, setDetails] = useState({
        name : "",
        phone: "",
        email: "",
        address: ""
    })


    useEffect( async ()=>{
     
        let _id;
        await localStorage.getItem('login')
        .then(res => {
            _id = (JSON.parse(res)).data._id
            setId(_id)
        })
        .catch((err)=>{
            console.log("somthing went worng while reading from localstorage and assigning value to id " + err )
        })
       
        await fetch(`${API}/distributer/read`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({_id})
        })
        .then(res=>res.json())
        .then(res=> {
            setDetails({
                name: res.data.name,
                email:res.data.email,
                phone: res.data.phone,
                address: res.data.address
            })
        })
        .catch(err => console.log(err))
        
    },[])


    const handleUpdate = async () =>{
        await fetch(`${API}/distributer/update`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                _id: id,
                details
            })
        })
        .then(res=>res.json())
        .then(res=> {
   
           

            let localDetails = localStorage.getItem('login')
                localDetails.name = res.data.name,
                localDetails.email =res.data.email,
                localDetails.phone = res.data.phone,
                localDetails.address = res.data.address

                setDetails({
                    ...details,
                    name: res.data.name
                })
                
                setDetails({
                    ...details,
                    email:res.data.email
                })
                
                setDetails({
                    ...details,
                    phone: res.data.phone
                })
                
                setDetails({
                    ...details,
                    address: res.data.address
                })
                setDetails({
                    ...details
                    
                })
                
            Alert.alert("Data Updated")
            
        })
        .catch(err => console.log(err))
    }


    const handlePasswordUpdate = async ()=>{
        console.log("update3");
  
        await fetch(`${API}/distributer/update_password`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                _id: id,
                old_password: oldPassword,
                new_password: newPassword
            })
        })
        .then(res=>res.json())
        .then(res=> {
                setNewPassword("")
                setOldPassword("")
            Alert.alert(res.message)
            
        })
        .catch(err => console.log(err))
    }



    const handleLogout = ()=>{

        localStorage.removeItem("login")
        .then(()=>{ navigation.navigate("Login") })
        .catch(err => {  })
    }

  

    return(
        <>

            <KeyboardAwareScrollView style={{
                    display: "flex",
                    flex: 1,
                    height: Dimensions.get("window").height,
                    width: Dimensions.get("window").width,
                }}>

<View style={styles.heightDivider}></View>
                
                <View style={styles.heightDivider}></View>
                    
                <View style={styles.container}>
                    <Text style={styles.text}>Update Details</Text>
                    <TextInput onChangeText={(value)=>{setDetails({...details, name: value})}} value={details.name} style={styles.input} placeholder="Name"/>
                    <TextInput onChangeText={(value)=>{setDetails({...details, phone: value })}} value={details.phone} style={styles.input} keyboardType="number-pad" placeholder="Phone"/>
                    <TextInput onChangeText={(value)=>{setDetails({...details, email:value})}} value={details.email} style={styles.input} placeholder="Email Id"/>
                    <TextInput onChangeText={(value)=>{setDetails({...details, address:value})}} value={details.address} style={styles.input} multiline placeholder="Address"/>
                    <View style={styles.heightDivider}></View>
                    <Button onPress={()=> handleUpdate()} title="Click to Update Info"/>
                </View>
                <View style={styles.heightDivider}></View>
                <View style={styles.container}>
                <Text style={styles.text}>Update Password</Text>
                   
                    <TextInput 
                    value={oldPassword} 
                    style={styles.input} 
                    onChangeText={(value)=>setOldPassword(value)}
                    placeholder="Old Password"/>
                   
                    <TextInput 
                    value={newPassword} 
                    onChangeText={(value)=>setNewPassword(value)}
                    style={styles.input} 
                    placeholder="New Password"/>
                    
                    <View style={styles.heightDivider}></View>
                        <Button onPress={()=>{handlePasswordUpdate()}} title="Click to Update Password"/>
                    <View style={styles.heightDivider}></View>
                    
                </View>
                <View style={styles.heightDivider}></View>
                <Button style={styles.logout} onPress={()=>{handleLogout()}} color={"red"} title="Click to Logout"/>
                <View style={styles.heightDivider}></View>

                <Version/>

              </KeyboardAwareScrollView >

              
  
       </>
    );
}


const styles = StyleSheet.create({
  input : {
    width: Dimensions.get("window").width-50 ,
      fontSize: 15,
      borderBottomWidth: 2,
      marginTop: 15,
      marginLeft: 10,
      paddingTop: 15,
      borderBottomColor: "red"
  },
  text : {
      textAlign:"center",
      fontWeight: "bold",
      fontSize: 20,
      marginTop: 30
  },
  heightDivider : {
      height: 20
  },
  container: {
      borderWidth: 2,
      borderColor: "black",
      padding: 5,
      marginRight: 10,
      marginLeft:10
  },
  logout: {
      marginBottom: 10
  }
})