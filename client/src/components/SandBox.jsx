import React, { useEffect} from 'react';
import { TextInput } from 'react-native';

export default function UselessTextInput() {
  const [value, onChangeText] = React.useState('');

  useEffect(() => {
    console.log(value, "---")
  }, [value])

  return (
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
  );
};

<View style={styles.container}>
  <View style= {styles.board}>
  <BoxComponent />
  {/* <UselessTextInput></UselessTextInput> */}
  </View>
  <StatusBar style="auto" />
</View>