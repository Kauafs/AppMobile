import { StyleSheet } from 'react-native';

const styleLR = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2f',
    paddingHorizontal: 20,
  },
  mainTittle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e63946',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  codeImage: {
    width: '100%',
    height: 200,
    marginVertical: 10,
    borderRadius: 8,
  },
  textPhrase: {
    fontSize: 16,
    color: '#e63946',
    marginBottom: 20,
    textAlign: 'justify',
  },
  inputBox: {
    marginBottom: 20,
    backgroundColor: '#e63946',
    padding: 15,
    borderRadius: 8,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000ff',
    marginBottom: 10,
    textAlign: 'center'
  },
  textItem: {
    fontSize: 15,
    color: 'black',
    marginBottom: 6,
  },
  codeBlock: {
    fontSize: 14,
    color: '#50fa7b',
    backgroundColor: '#282a36',
    padding: 10,
    borderRadius: 6,
    fontFamily: 'monospace',
    marginTop: 8,
  },
  buttoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#e63946',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  }
});

export default styleLR;