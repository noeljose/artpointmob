import React from 'react';
import { Text, View,Image,  Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Orders from '../screens/Orders';
import Products from '../screens/Products';
import Settings from '../screens/Settings';
import Login from "../components/Login"
import NewOrder from "../screens/NewOrder"

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
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

        <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
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
        name="Buy" 
        component={NewOrder} 
        options={{
            tabBarIcon: ({focused}) => (
                <View style={{alignItems:"center", justifyContent: "center", top: 10}}>
                    <Image
                    source={require("../assets/icons/plus.png")}
                 
                    style={{
                        width:25,
                        height:25,
                        tintColor: focused?'#e32f45':'#748c94'
                    }}
                    />
                    <Text style={{color: focused?'#e32f45':'#748c94', fontSize:12}}>
                    Buy
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



// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from '../screens/Home';
// import Orders from '../screens/Orders';
// import Products from '../screens/Products';
// import Settings from '../screens/Settings';


// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={Home} />
//         <Tab.Screen name="Products" component={Products} />
//         <Tab.Screen name="Orders" component={Orders} />
//         <Tab.Screen name="Settings" component={Settings} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }