import { StyleSheet } from 'react-native';

export const stylesT = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2f',
    paddingTop: 40,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    elevation: 4,
    height: 240,
    marginBottom: 20
  },
  cardText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 12
  },
  icon: {
    marginBottom: 16,
    alignSelf: 'center'
  },
  scrollView: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  }

});

export default stylesT;