import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerInicial: {
    flex: 1,  
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    width: '100%',
  },
  container: {
    height: "100%",
    width: 900,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label:{
    fontSize: 18,
    marginBottom: 5,
  },
  input:{
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    paddingLeft: 10,
    fontSize: 16,
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  error:{
    marginTop: 20,
    color: 'red',
  },
  picker:{
    height: 50,
    width: 200,
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 10,
  }
});

export default styles;