import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,

} from "react-native";
import Picker from '@react-native-picker/picker'

const App = () => {
  const [value, setValue] = useState("");
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");

  const converter = async () => {
    const fromCurrencyCode = fromCurrency.toUpperCase();
    const toCurrencyCode = toCurrency.toUpperCase();
  
    // cotações da moeda
    const api = new CurrencyConverter(); 
    const rates = await api.getRates(fromCurrencyCode, toCurrencyCode);
  
    // calculo lá
    const convertedValue = rates[toCurrencyCode] * Number(value);
  
    // coisando o estado
    setValue(convertedValue.toFixed(2));
  };
  
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de moedas</Text>
      <View style={styles.inputContainer}>
        <Picker
          selectedValue={fromCurrency}
          onValueChange={setFromCurrency}
          style={styles.input}
          placeholder="Moeda de origem"
          items={[
            { label: "Real", value: "BRL" },
            { label: "Dolar", value: "Dolar" },
            { label: "Euro", value: "Eur" },
            
        ]}
        />
          {/* <Picker.Item label="Real" value="BRL" />
          <Picker.Item label="Dólar" value="USD" />
          <Picker.Item label="Euro" value="EUR" /> */}
       
        <Picker
          selectedValue={toCurrency}
          onValueChange={setToCurrency}
          style={styles.input}
          placeholder="Moeda de destino"

          items={[
            { label: "Real", value: "BRL" },
            { label: "Dolar", value: "Dolar" },
            { label: "Euro", value: "Eur" },
            
        ]}
        />
          {/* <Picker.Item label="Real" value="BRL" />
          <Picker.Item label="Dólar" value="USD" />
          <Picker.Item label="Euro" value="EUR" /> */}
       
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          onChangeText={setValue}
          style={styles.input}
          placeholder="Valor"
        />
      </View>
      <Button
        title="Converter"
        onPress={converter}
        style={styles.button}
      />
      <Text style={styles.result}>
        Valor convertido: {value} {toCurrency}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  inputContainer: {
    width: 200,
    margin: 10,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
  button: {
    width: 200,
    height: 40,
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: 5,
  },
  result: {
    fontSize: 18,
    color: "#000",
  },
});

 

export default App;
