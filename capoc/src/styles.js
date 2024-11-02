import { StyleSheet } from 'react-native';

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f4e3', // 연한 아이보리
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#343a40',
  },
  button: {
    backgroundColor: '#d3d3d3', // 연한 회색
    padding: 15,
    borderRadius: 5,
    elevation: 2,
    marginVertical: 10,
  },
  buttonText: {
    color: '#343a40',
    fontSize: 16,
    textAlign: 'center',
  },
  footer: {
    backgroundColor: '#ffcccb', // 연한 핑크색
    width: '100%',
    padding: 15,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  footerText: {
    color: '#343a40',
    fontSize: 16,
  },
  header: {
    backgroundColor: '#ffcccb', // 연한 핑크색
    width: '100%',
    padding: 20,
    alignItems: 'center',
    position: 'absolute',
    top: 0,
  },
  headerText: {
    fontSize: 24,
    color: '#343a40',
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
  ingredientText: {
    fontSize: 18,
    marginVertical: 4,
    color: '#343a40', // 텍스트 색상
  },  
});

export default commonStyles;
