import React, { useState } from "react";
import { Text, View } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';


export default function Products({navigator}){

    const [state, setState] = useState({
        country: 'uk'
    })

    return(
       <View>
            <DropDownPicker
    items={[
        {label: 'USA', value: 'usa', hidden: true},
        {label: 'UK', value: 'uk'},
        {label: 'France', value: 'france'},
    ]}
    defaultValue={state.country}
    containerStyle={{height: 40}}
    style={{backgroundColor: '#fafafa'}}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    dropDownStyle={{backgroundColor: '#fafafa'}}
    onChangeItem={item => setState({
        country: item.value
    })}
/>
       </View>
    );
}