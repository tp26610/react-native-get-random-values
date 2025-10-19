import { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { getRandomBase64 } from 'react-native-get-random-values';

export default function App() {
  const [randomValue, setRandomValue] = useState(0);
  return (
    <View style={styles.container}>
      <Button
        title="Generate Random Value"
        onPress={() => {
          setRandomValue(getRandomBase64(3, 7));
        }}
      />
      <Text>Result: {randomValue}</Text>
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
  },
});
