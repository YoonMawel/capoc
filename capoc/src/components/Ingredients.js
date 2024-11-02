import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import commonStyles from '../styles'; // styles.js 파일 경로에 맞게 수정

const Ingredients = ({ navigation }) => {
  const [ingredients, setIngredients] = useState([]);

  const addIngredient = (ingredient) => {
    setIngredients((prevIngredients) => [...prevIngredients, ingredient]);
  };

  return (
    <View style={commonStyles.container}>
      {/* 커스텀 헤더 */}
      <View style={styles.header}>
        <Text style={styles.headerText}>재료 목록</Text>
      </View>
      
      <FlatList
        data={ingredients}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={commonStyles.ingredientText}>{item}</Text>}
      />
      
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MainScreen')}>
          <Text style={styles.buttonText}>🏠 메인 화면</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Recipes')}>
          <Text style={styles.buttonText}>📖 레시피 보기</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddItem', { addIngredient })}>
          <Text style={styles.buttonText}>➕ 재료 추가</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ffcccb', // 연한 핑크색
    width: '100%',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    color: '#343a40',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ffcccb', // 연한 핑크색
    paddingVertical: 5,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 15, // 터치 영역 확장
  },
  buttonText: {
    color: '#343a40', // 버튼 텍스트 색상
    fontSize: 16,
  },
  separator: {
    width: 1,
    backgroundColor: '#e0e0e0', // 구분선 색상
    height: '80%', // 구분선 높이
  },
});

export default Ingredients;
