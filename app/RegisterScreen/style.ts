import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2f',
    padding: 20,
    justifyContent: 'center',
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },

  button: {
    backgroundColor: '#a55eea',
    paddingVertical: 15,
    borderRadius: 21,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',

  },

  error: {
    color: '#ff7675',
    fontSize: 13,
    marginTop: 5,
    marginLeft: 5,
  },

  iconLogin: {
    width: '100%',
    height: 190,
    marginBottom: 20,
    marginTop: 20
    },
});

export default styles;