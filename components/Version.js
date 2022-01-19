import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {API}from "../data"
import localStorage from "@react-native-async-storage/async-storage"


export default function Version() {



  

  return (

    <View style={styles.container}>
        <Text style={styles.heading_m}>ART POINT</Text>
        <Text style={styles.heading_s}>V 1.0.0</Text>
    </View>
 
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },

  heading_m: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red"
  },
  heading_s: {
    fontSize: 10,
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