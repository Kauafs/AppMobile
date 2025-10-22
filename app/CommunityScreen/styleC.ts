import { StyleSheet } from 'react-native';

const stylesC = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2f',
    paddingTop: 40,
  },
  scrollView: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  card: {
    backgroundColor: '#a55eea',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    elevation: 6,
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
  },
});

export default stylesC;