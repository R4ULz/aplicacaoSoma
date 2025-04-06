import {SafeAreaView } from 'react-native';
import styles from '@/src/forms/formStyle';
import PaginaInicial from "@/src/forms/formObj";

export default function HomeScreen() {
  
  return (
   <SafeAreaView style={styles.containerInicial}>
      <PaginaInicial />
   </SafeAreaView>
  );
}

