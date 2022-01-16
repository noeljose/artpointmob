import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// You can import from local files
import DropDownPicker from 'react-native-dropdown-picker'

export default function NewOrder() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        React native dropdown picker
      </Text>
        <DropDownPicker
            items={[
                {label: 'English', value: 'en'},
                {label: 'Deutsch', value: 'de'},
                {label: 'French', value: 'fr'},
            ]}
            defaultIndex={0}
            containerStyle={{height: 40}}
            onChangeItem={item => console.log(item.label, item.value)}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
