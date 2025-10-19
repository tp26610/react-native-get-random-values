import { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import {
  getRandomBase64,
  getRandomValues,
} from 'react-native-get-random-values';

export default function App() {
  const [randomBase64, setRandomBase64] = useState('');
  const [randomValuesStr, setRandomValuesStr] = useState('');
  const [globalRandomValuesStr, setGlobalRandomValuesStr] = useState('');
  return (
    <View style={styles.container}>
      <Button
        title="get random base64 (10 bytes)"
        onPress={() => {
          setRandomBase64(getRandomBase64(10));
        }}
      />
      <Text>getRandomBase64 Result: {randomBase64}</Text>
      <Button
        title="get random values (5 length array)"
        onPress={() => {
          const randomValues = getRandomValues(new Uint8Array(5));
          setRandomValuesStr(randomValues.join(','));
        }}
      />
      <Text>getRandomValues Result: {randomValuesStr}</Text>
      <Button
        title="global get random values (5 length array)"
        onPress={() => {
          require('react-native-get-random-values'); // workaround for issue: global.crypto is not defined
          const globalGetRandomValues = (global.crypto as any).getRandomValues;
          const randomValues = globalGetRandomValues(new Uint8Array(5));
          setGlobalRandomValuesStr(randomValues.join(','));
        }}
      />
      <Text>global.getRandomValues Result: {globalRandomValuesStr}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    backgroundColor: 'white',
    padding: 32,
  },
});
