import { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { getRandomBase64 } from 'react-native-get-random-values';

export default function App() {
  const [randomBase64, setRandomBase64] = useState('');
  const [randomValuesStr, setRandomValuesStr] = useState('');
  return (
    <View style={styles.container}>
      <Button
        title="get random base64 (10 bytes)"
        onPress={() => {
          setRandomBase64(getRandomBase64(10));
        }}
      />
      <Text>GetRandomBase64 Result: {randomBase64}</Text>
      <Button
        title="get random values (10 length array)"
        onPress={() => {
          const getRandomValues = (global.crypto as any).getRandomValues;
          const randomValues = getRandomValues(new Uint8Array(5));
          setRandomValuesStr(randomValues.join(','));
        }}
      />
      <Text>GetRandomValues Result: {randomValuesStr}</Text>
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
