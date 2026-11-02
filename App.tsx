import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import {useState} from 'react';

export default function App() {
const [age, setAge] = useState<string>("")
const ageAsNumber: number = !isNaN(Number(age)) === true ? Number(age) : 0
const lower = ageAsNumber === 0 ? 0 : (220 - ageAsNumber) * 0.65
const upper = ageAsNumber === 0 ? 0 : (220 - ageAsNumber) * 0.85

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Heart Rate Limits Calculator</Text>
      <TextInput
        placeholder= 'Age'
        keyboardType='number-pad'
        value={age}
        onChangeText={ setAge }
      />
      <Text>Lower limit: {lower.toFixed(2)} bpm </Text>
      <Text>Upper limit: {upper.toFixed(2)} bpm </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold'

  }
});
