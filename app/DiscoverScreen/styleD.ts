import { StyleSheet } from "react-native";

const stylesD = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#1e1e2f' 
},
  title: { 
    fontSize: 20, 
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#43d1d8ff' ,
    textAlign: 'center'
},
  evento: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#a55eea',
    borderRadius: 8,
    padding: 12,
    elevation: 2,
},
  iconBox: {
    alignItems: 'center',
    marginRight: 12,
    width: 60,
},
  ano: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#010b15ff',
    marginTop: 4,
},
  textBox: {
    flex: 1,
},
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#010b15ff',
  },
  descricao: {
    fontSize: 14,
    color: '#010b15ff',
  },
});

export default stylesD;