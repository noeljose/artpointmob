import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {API}from "../data"
import localStorage from "@react-native-async-storage/async-storage"


export default function Login({navigation}) {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState(false)
  const [validate, setValidate] = useState(false)

  


  const handleLogin = async() =>{
      
    if (userName == '' || password =='') { setErr(true) }

    else{

      await fetch(`${API}/distributer/login`,{
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          email: userName,
          password: password
        })
      })

      .then(res => res.json())
      .then(res => {
    
          if (res.status) {
            localStorage.setItem('login', JSON.stringify(res))
            navigation.navigate("Home")
          }else {
              throw new Error
          }
      })
      .catch(err => {
        setErr(true)
        setValidate(false)
      })
      
    }
  }

  

  return (

    <View style={styles.container}>
    <Text style={styles.heading_m}>ART POINT</Text>
    <Text style={styles.heading_s}>Distributer Login</Text>

   <TextInput 
     placeholder='User Email'
     style={styles.input}
     onChangeText={(value) => setUserName(value)} />

   <TextInput 
     placeholder='Password' 
     style={styles.input}
     onChangeText={(value) => setPassword(value)} />

   <Text>
   {err? <Text style={{ color: 'red' }}>Error</Text>:<Text style={{ color: 'red' }}></Text>}
   </Text>

   <Button onPress={()=>{handleLogin()}} title='Login'/>
 </View>
 
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  heading_m: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red"
  },
  heading_s: {
    fontSize: 15,
    fontWeight: "bold",
    color: "grey"
  },

  input: {
    borderBottomWidth: 3,
    borderBottomColor: "red",
    height:40,
    minWidth: 250
  },

  error : {
    color: "red",
    textAlign: "center",
    fontSize: 20
  },

 success : {
    color: "green",
    textAlign: "center",
    fontSize: 20
  }
});