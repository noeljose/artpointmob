import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet,ScrollView, Dimensions, Image, Button,TextInput, Alert} from 'react-native';
import { API, IMG } from '../data';
import DropDownPicker from 'react-native-dropdown-picker';
import localStorage from "@react-native-async-storage/async-storage"
// import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function NewOrder({navigation,route}) {
  

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(12);
  const [items, setItems] = useState([ {value:12, label:'12'}, {value:13, label:'13'}, {value:14, label:'14'}, {value:15, label:'15'}, {value:16, label:'16'}, {value:17, label:'17'}, {value:18, label:'18'}, {value:19, label:'19'}, {value:20, label:'20'}, {value:21, label:'21'}, {value:22, label:'22'}, {value:23, label:'23'}, {value:24, label:'24'}, {value:25, label:'25'}, {value:26, label:'26'}, {value:27, label:'27'}, {value:28, label:'28'}, {value:29, label:'29'}, {value:30, label:'30'}, {value:31, label:'31'}, {value:32, label:'32'}, {value:33, label:'33'}, {value:34, label:'34'}, {value:35, label:'35'}, {value:36, label:'36'}, {value:37, label:'37'}, {value:38, label:'38'}, {value:39, label:'39'}, {value:40, label:'40'}, {value:41, label:'41'}, {value:42, label:'42'}, {value:43, label:'43'}, {value:44, label:'44'}, {value:45, label:'45'}, {value:46, label:'46'}, {value:47, label:'47'}, {value:48, label:'48'}, {value:49, label:'49'}, {value:50, label:'50'}, {value:51, label:'51'}, {value:52, label:'52'}, {value:53, label:'53'}, {value:54, label:'54'}, {value:55, label:'55'}, {value:56, label:'56'}, {value:57, label:'57'}, {value:58, label:'58'}, {value:59, label:'59'}, {value:60, label:'60'}, {value:61, label:'61'}, {value:62, label:'62'}, {value:63, label:'63'}, {value:64, label:'64'}, {value:65, label:'65'}, {value:66, label:'66'}, {value:67, label:'67'}, {value:68, label:'68'}, {value:69, label:'69'}, {value:70, label:'70'}, {value:71, label:'71'}, {value:72, label:'72'}, {value:73, label:'73'}, {value:74, label:'74'}, {value:75, label:'75'}, {value:76, label:'76'}, {value:77, label:'77'}, {value:78, label:'78'}, {value:79, label:'79'}, {value:80, label:'80'}, {value:81, label:'81'}, {value:82, label:'82'}, {value:83, label:'83'}, {value:84, label:'84'}, {value:85, label:'85'}, {value:86, label:'86'}, {value:87, label:'87'}, {value:88, label:'88'}, {value:89, label:'89'}, {value:90, label:'90'}, {value:91, label:'91'}, {value:92, label:'92'}, {value:93, label:'93'}, {value:94, label:'94'}, {value:95, label:'95'}, {value:96, label:'96'}, {value:97, label:'97'}, {value:98, label:'98'}, {value:99, label:'99'}]);

  const [open3, setOpen3] = useState(false);
  const [value3, setValue3] = useState(12);
  const [items3, setItems3] = useState([{value:12, label:'12'}, {value:13, label:'13'}, {value:14, label:'14'}, {value:15, label:'15'}, {value:16, label:'16'}, {value:17, label:'17'}, {value:18, label:'18'}, {value:19, label:'19'}, {value:20, label:'20'}, {value:21, label:'21'}, {value:22, label:'22'}, {value:23, label:'23'}, {value:24, label:'24'}, {value:25, label:'25'}, {value:26, label:'26'}, {value:27, label:'27'}, {value:28, label:'28'}, {value:29, label:'29'}, {value:30, label:'30'}, {value:31, label:'31'}, {value:32, label:'32'}, {value:33, label:'33'}, {value:34, label:'34'}, {value:35, label:'35'}, {value:36, label:'36'}, {value:37, label:'37'}, {value:38, label:'38'}, {value:39, label:'39'}, {value:40, label:'40'}, {value:41, label:'41'}, {value:42, label:'42'}, {value:43, label:'43'}, {value:44, label:'44'}, {value:45, label:'45'}, {value:46, label:'46'}, {value:47, label:'47'}, {value:48, label:'48'}, {value:49, label:'49'}, {value:50, label:'50'}, {value:51, label:'51'}, {value:52, label:'52'}, {value:53, label:'53'}, {value:54, label:'54'}, {value:55, label:'55'}, {value:56, label:'56'}, {value:57, label:'57'}, {value:58, label:'58'}, {value:59, label:'59'}, {value:60, label:'60'}, {value:61, label:'61'}, {value:62, label:'62'}, {value:63, label:'63'}, {value:64, label:'64'}, {value:65, label:'65'}, {value:66, label:'66'}, {value:67, label:'67'}, {value:68, label:'68'}, {value:69, label:'69'}, {value:70, label:'70'}, {value:71, label:'71'}, {value:72, label:'72'}, {value:73, label:'73'}, {value:74, label:'74'}, {value:75, label:'75'}, {value:76, label:'76'}, {value:77, label:'77'}, {value:78, label:'78'}, {value:79, label:'79'}, {value:80, label:'80'}, {value:81, label:'81'}, {value:82, label:'82'}, {value:83, label:'83'}, {value:84, label:'84'}, {value:85, label:'85'}, {value:86, label:'86'}, {value:87, label:'87'}, {value:88, label:'88'}, {value:89, label:'89'}, {value:90, label:'90'}, {value:91, label:'91'}, {value:92, label:'92'}, {value:93, label:'93'}, {value:94, label:'94'}, {value:95, label:'95'}, {value:96, label:'96'}, {value:97, label:'97'}, {value:98, label:'98'}, {value:99, label:'99'}]);

  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(0);
  const [items2, setItems2] = useState([{value:0, label:'0'},{value:0.1, label:'0.1'}, {value:0.2, label:'0.2'}, {value:0.3, label:'0.3'}, {value:0.4, label:'0.4'}, {value:0.5, label:'0.5'}, {value:0.6, label:'0.6'}, {value:0.7, label:'0.7'}, {value:0.8, label:'0.8'}, {value:0.9, label:'0.9'}]);

  const [open4, setOpen4] = useState(false);
  const [value4, setValue4] = useState(0);
  const [items4, setItems4] = useState([{value:0, label:'0'},{value:0.1, label:'0.1'}, {value:0.2, label:'0.2'}, {value:0.3, label:'0.3'}, {value:0.4, label:'0.4'}, {value:0.5, label:'0.5'}, {value:0.6, label:'0.6'}, {value:0.7, label:'0.7'}, {value:0.8, label:'0.8'}, {value:0.9, label:'0.9'}]);

  const [open5, setOpen5] = useState(false);
  const [value5, setValue5] = useState(0);
  const [items5, setItems5] = useState([{value:0, label:'0mm'},{value:4, label:'4mm'}, {value:5, label:'5mm'}, {value:6, label:'6mm'},{value:8, label:'8mm'},{value:10, label:'10mm'} ]);

  const [arcb, setarcb] = useState(false)
  const [arct, setarct] = useState(false)
  const [vcc, setvc] = useState(false)
  const [wc, setwc] = useState(false)
  const [shipaddress, setshipaddress] = useState("")
  const [message, setmessage] = useState("")
  const [color, setcolor] = useState({
    b1: "blue",
    b2: "blue",
    b3: "blue",
    b4: "blue",
  })

  let details = route.params.product_details

  const handleOrder = async ()=>{
    let dis_id
    await localStorage.getItem("login").then(res=> dis_id = (JSON.parse(res)).data._id)
    let order = {
     product_id : details._id,
      order_details : {
        width :    value3+value4 ,
        height :    value+value2,
        arcTop :    arct,
        arcBottom : arcb,
        varnish :   vcc,
        whiteCoat : wc,
        sandwich :  value5,
        message :   message
    },
    order_placed_by : dis_id,
    shipping_address : shipaddress

    };


    await fetch(`${API}/order/place`,{
      method: "post",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then((json)=>{
      if (json.status) {
        Alert.alert(json.message)
      } else {
        Alert.alert("Order Could Not be placed right now, try again later")
      }
    })



  }



  return (
    <ScrollView nestedScrollEnabled={true}>
      <Button onPress={()=>navigation.navigate("Products")} title='Go Back'/>
    <View style={{flex:1}}>

      
<Image source={{uri: `${API}/${IMG}/${details.image}`}}  style={styles.image} />  
    

    <Text style={styles.title}>Place Order </Text>

    <View styles={{zIndex:100000000000000000000000000000000}}>

    <Text>GLASS BASE HEIGHT X WIDTH (Inches) <Text style={styles.red_star}>*</Text></Text>
      <View style={{...styles.container2}}>
          <View>
            <DropDownPicker
            listMode="SCROLLVIEW"
            
                    style={styles.dropdown}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder="height (In)"
                />
          </View>

          <View >
              <DropDownPicker
              listMode="SCROLLVIEW"
              style={styles.dropdown}
                  open={open2}
                  value={value2}
                  items={items2}
                  setOpen={setOpen2}
                  setValue={setValue2}
                  setItems={setItems2}
                  placeholder=".00"
              />
          </View>
          <Text>x</Text>
          <View>
            <DropDownPicker
            listMode="SCROLLVIEW"
                    style={styles.dropdown}
                    open={open3}
                    value={value3}
                    items={items3}
                    setOpen={setOpen3}
                    setValue={setValue3}
                    setItems={setItems3}
                    placeholder="Width(In)"
                />
          </View>
         

          <View>
              <DropDownPicker
              listMode="SCROLLVIEW"
              style={styles.dropdown}
                  open={open4}
                  value={value4}
                  items={items4}
                  setOpen={setOpen4}
                  setValue={setValue4}
                  setItems={setItems4}
                  placeholder=".00"
              />
          </View>

      </View>

     
    </View>

    <View style={{zIndex: -1}}>
      <Text style={styles.calc}>{Math.floor(((value/12)+value2)*10)/10} Feet Height and {Math.floor(((value3/12)+value4)*10)/10} Feet width </Text>
    </View>

   
    <View style={styles.margin}>
      <Button color={color.b1} onPress={()=>{
        setarct(!arct)
        color.b1 =="blue"?setcolor({...color, b1: "green"}):setcolor({...color, b1: "blue"})
      
      }} title="Add Arc Top" />
    </View>

    <View style={styles.margin}>
      <Button color={color.b2} onPress={()=>{
        setarcb(!arcb)
        color.b2 =="blue"?setcolor({...color, b2: "green"}):setcolor({...color, b2: "blue"})
      
      }} title="Add Arc Bottom" />
    </View>

    <View style={styles.margin}>
      <Button color={color.b3} onPress={()=>{
        setvc(!vcc)
        color.b3 =="blue"?setcolor({...color, b3: "green"}):setcolor({...color, b3: "blue"})
      
      }} styles={{width: (Dimensions.get("screen").width)}} title="Varnish Coat" />

    </View>
    <View style={styles.margin}>
      <Button color={color.b4} onPress={()=>{
        setwc(!wc)
        color.b4 =="blue"?setcolor({...color, b4: "green"}):setcolor({...color, b4: "blue"})
      
      }} styles={{width: (Dimensions.get("screen").width)}} title="White Coat" />
    </View>
   
    <View style={{...styles.margin, ...styles.input}}>
      <TextInput 
      onChangeText={(value)=>setshipaddress(value)}
      multiline
      styles={{...styles.input, width: (Dimensions.get("screen").width)}} placeholder="Shipping address" />
    </View>
   
    <View style={{...styles.margin, ...styles.input}}>
      <TextInput 
       onChangeText={(value)=>setmessage(value)}
      multiline
      styles={{...styles.input, width: (Dimensions.get("screen").width)}} placeholder="Custom Message" />
    </View>
   

   

    <View>
              <DropDownPicker
              listMode="SCROLLVIEW"
              style={{
                ...styles.dropdown,
                width: Dimensions.get("screen").width,
                margin:0,
                marginTop:10,
                marginBottom: 15}}

                  open={open5}
                  value={value5}
                  items={items5}
                  setOpen={setOpen5}
                  setValue={setValue5}
                  setItems={setItems5}
                  placeholder="select sandwich glass thickness"
              />
          </View>
  

          
    </View>
    <View style={{...styles.margin}}>
      <Button onPress={()=>{ handleOrder()}} title='Place Order Now'/>
    </View>
    </ScrollView>
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
  red_star:{color:"red"},

  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  container2: {
   flexDirection: "row"
  },
  margin:{
    marginTop:10,
    marginBottom:10,
    zIndex:-1
  },
  calc:{
    color: "green",
    textAlign:"center",
    fontWeight: "bold",
    marginTop:5,
    marginBottom: 5
  },
  title:{
    fontWeight: "bold",
    fontSize: 20,
    textTransform: "uppercase",
    textAlign: "center",
    marginTop: 5,
    marginBottom: 5
  },

dropdown:{
    width: Dimensions.get("screen").width/4-8 ,
    margin:2
},

image: {
  width: Dimensions.get("window").width-10,
  marginLeft: 5,
  marginRight: 5,
  height:Dimensions.get("window").height * 0.4,
 
  
},
});
