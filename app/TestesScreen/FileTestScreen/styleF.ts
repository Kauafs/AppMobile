import { StyleSheet } from "react-native";

const stylesF = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#1e1e2f',
  },
  title: {
    fontSize: 18,
    marginTop: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  infoBox: {
    marginTop: 50,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
    marginBottom: 4,
  },
  value: {
    fontSize: 15,
    color: '#222',
    marginBottom: 12,
  },
  anim: {
    width: 400,
    height: 400,
    marginTop: 16,
    alignSelf: 'center'
  }
});

export default stylesF;