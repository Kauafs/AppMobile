import { StyleSheet } from 'react-native';

const styleLB = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2f',
    paddingHorizontal: 20,
  },
  mainTittle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff', 
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
    color: '#ffffff',
    marginBottom: 20,
    textAlign: 'justify',
  },
  inputBox: {
    marginBottom: 20,
    backgroundColor: '#60a5fa',
    padding: 15,
    borderRadius: 8,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 10,
    textAlign: 'center'
  },
  textItem: {
    fontSize: 15,
    color: '#ffffff',
    marginBottom: 6,
  },
  codeBlock: {
    fontSize: 14,
    color: '#38bdf8',
    backgroundColor: '#1e293b', 
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
    backgroundColor: '#3b82f6',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  }
});

export default styleLB;