import React from 'react';
import { Text, View,Image,  StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Orders from '../screens/Orders';
import Products from '../screens/Products';
import Settings from '../screens/Settings';
import Login from "../components/Login"
import ViewProduct from "../screens/internal/ViewProduct"
import NewOrder from '../screens/NewOrder';

const Tab = createBottomTabNavigator();

export default function App() {




  return (
    <NavigationContainer>
               <StatusBar
     backgroundColor="red"
     barStyle="dark-content"
   />
      <Tab.Navigator 
        screenOptions={({ route }) => ({
              tabBarStyle: route.name === 'Login'? {display: "none"} : null,
            tabBarShowLabel: false,
            tabBarHideOnKeyboard: true,
            
        
        })}> 

        <Tab.Screen name="Login" component={Login} options={{
            tabBarItemStyle:{
                display: "none"
            }
        }} />

        <Tab.Screen name="ViewProduct" component={ViewProduct} options={{
            tabBarItemStyle:{
                display: "none"
            }
        }} />
        <Tab.Screen name="NewOrder" component={NewOrder} options={{
            tabBarItemStyle:{
                display: "none"
            }
        }} />

        <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
            title:"",
            headerTitleAlign: 'center',
            headerShown:false,
            tabBarIcon: ({focused}) => (
                <View style={{alignItems:"center", justifyContent: "center", top: 10}}>
                    <Image
                    source={require("../assets/icons/home.png")}
                 
                    style={{
                        width:25,
                        height:25,
                        tintColor: focused?'#e32f45':'#748c94'
                    }}
                    />
                    <Text style={{color: focused?'#e32f45':'#748c94', fontSize:12}}>
                    Home
                    </Text>
                    <Text></Text>
                </View>)
        }}/>

        <Tab.Screen 
        name="Orders" 
        component={Orders}
        
        options={{
            tabBarIcon: ({focused}) => (
                <View style={{alignItems:"center", justifyContent: "center", top: 10}}>
                    <Image
                    source={require("../assets/icons/list.png")}
                 
                    style={{
                        width:25,
                        height:25,
                        tintColor: focused?'#e32f45':'#748c94'
                    }}
                    />
                    <Text style={{color: focused?'#e32f45':'#748c94', fontSize:12}}>
                    Orders
                    </Text>
                    <Text></Text>
                </View>)
        }} 
        />



        <Tab.Screen 
        name="Products" 
        component={Products} 
        options={{
            tabBarIcon: ({focused}) => (
                <View style={{alignItems:"center", justifyContent: "center", top: 10}}>
                    <Image
                    source={require("../assets/icons/bag.png")}
                 
                    style={{
                        width:25,
                        height:25,
                        tintColor: focused?'#e32f45':'#748c94'
                    }}
                    />
                    <Text style={{color: focused?'#e32f45':'#748c94', fontSize:12}}>
                    Products
                    </Text>
                    <Text></Text>
                </View>)
        }}
        />

    

        <Tab.Screen 
        name="Settings" 
        component={Settings}
        options={{
            tabBarIcon: ({focused}) => (
                <View style={{alignItems:"center", justifyContent: "center", top: 10}}>
                    <Image
                    source={require("../assets/icons/gear.png")}
                 
                    style={{
                        width:25,
                        height:25,
                        tintColor: focused?'#e32f45':'#748c94'
                    }}
                    />
                    <Text style={{color: focused?'#e32f45':'#748c94', fontSize:12}}>
                    Settings
                    </Text>
                    <Text></Text>
                </View>)
        }}
         />

      </Tab.Navigator>
    </NavigationContainer>
  );
}


