import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2f',
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  gridContainer: {
    justifyContent: 'center',
    paddingBottom: 20,
  },
  gridItem: {
    width: '45%',
    height: 180,
    margin: 10,
    backgroundColor: '#1e1e1e',
    borderRadius: 16,
    alignItems: 'center',
    padding: 20,
    elevation: 4,
  },
  gridIcon: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  gridText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
  },
});