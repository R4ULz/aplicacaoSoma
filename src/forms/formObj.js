import { Image, SafeAreaView, Text, TextInput, Button, View, StyleSheet } from 'react-native';
import React,{ useState } from 'react';
import { ThemedView } from '@/components/ThemedView';
import styles from '@/src/forms/formStyle'
import { Picker } from '@react-native-picker/picker';

export default function PaginaInicial() {
  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")
  const [resultado, setResultado] = useState(null)
  const [erro, setErro] = useState(null)
  const [operacao, setOperacao] = useState("")
  
  const Somar = () => {
    const n1 = parseFloat(num1)
    const n2 = parseFloat(num2)

    if (isNaN(n1) || isNaN(n2)) {
      setErro("Digite um número válido")
      setResultado(null)
      return
    }else{
      const soma = n1 + n2
      setResultado(soma)
      setErro("")
    }
  }
  
  const Subtracao = () => {
    const n1 = parseFloat(num1)
    const n2 = parseFloat(num2)

    if (isNaN(n1) || isNaN(n2)) {
      setErro("Digite um número válido")
      setResultado(null)
      return
    }else{
      const subtracao = n1 - n2
      setResultado(subtracao)
      setErro("")
    }
  }
  const Multiplicacao = () => {
    const n1 = parseFloat(num1)
    const n2 = parseFloat(num2)

    if (isNaN(n1) || isNaN(n2)) {
      setErro("Digite um número válido")
      setResultado(null)
      return
    }else{
      const multiplicacao = n1 * n2
      setResultado(multiplicacao)
      setErro("")
    }
  }
  const Divisao = () => {
    const n1 = parseFloat(num1)
    const n2 = parseFloat(num2)

    if (isNaN(n1) || isNaN(n2)) {
      setErro("Digite um número válido")
      setResultado(null)
      return
    }else{
      const divisao = n1 / n2
      setResultado(divisao)
      setErro("")
    }
  }

  const calcular = () => {
    switch (operacao) {
      case 'soma':
        Somar()
        break
      case 'subtracao':
        Subtracao()
        break
      case 'multiplicacao':
        Multiplicacao()
        break
      case 'divisao':
        Divisao()
        break
      default:
        setErro("Selecione uma operação válida")
    }
  }

  return (
    <View style={styles.containerInicial}>
      <ThemedView style={styles.stepContainer}>
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Número 1</Text>
          <TextInput
            style={styles.input}
            value={num1}
            onChangeText={setNum1}
            keyboardType="numeric"/>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Número 2</Text>
          <TextInput
            style={styles.input}
            value={num2}
            onChangeText={setNum2}
            keyboardType="numeric"/>
        </View>

        <Text style={styles.label}>Escolha a Operação</Text>
        <Picker selectedValue={operacao} onValueChange={(itemValue) => setOperacao(itemValue)} style={styles.picker}>
          <Picker.Item label="Selecione" value="Selecione" />
          <Picker.Item label="Soma" value="soma" />
          <Picker.Item label="Subtração" value="subtracao" />
          <Picker.Item label="Multiplicação" value="multiplicacao" />
          <Picker.Item label="Divisão" value="divisao" /> 
        </Picker>

        <Button title='Calcular' onPress={calcular} />

        {erro ? <Text style={styles.error}>{erro}</Text> : null}
        {resultado !== null && (
          <Text style={styles.resultado}>Resultado: {resultado}</Text>
        )}
      </SafeAreaView>

      </ThemedView>
    </View>
  );
}

