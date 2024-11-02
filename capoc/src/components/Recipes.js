import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import commonStyles from '../styles'; // styles.js 파일 경로에 맞게 수정

const Recipes = ({ navigation }) => { // navigation prop 추가
  const [searchQuery, setSearchQuery] = useState('');
  const [recipes, setRecipes] = useState([]); // 검색된 레시피 목록

  // 예시 레시피 데이터
  const allRecipes = [
    { id: '1', name: '김치찌개' },
    { id: '2', name: '불고기' },
    { id: '3', name: '된장찌개' },
    { id: '4', name: '비빔밥' },
  ];

  const handleSearch = () => {
    const filteredRecipes = allRecipes.filter(recipe =>
      recipe.name.includes(searchQuery) // 검색어가 포함된 레시피 필터링
    );
    setRecipes(filteredRecipes);
  };

  return (
    <View style={commonStyles.container}>
      {/* 커스텀 헤더 */}
      <View style={styles.header}>
        <Text style={styles.headerText}>레시피 목록</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="레시피를 검색하세요"
          value={searchQuery}
          onChangeText={setSearchQuery} // 입력값 업데이트
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.buttonText}>검색</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={recipes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text style={commonStyles.ingredientText}>{item.name}</Text>} // 레시피 목록 표시
      />

      {/* 커스텀 하단바 */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MainScreen')}>
          <Text style={styles.buttonText}>🏠 메인 화면</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Recipes')}>
          <Text style={styles.buttonText}>📖 레시피 보기</Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddItem')}>
          <Text style={styles.buttonText}>➕ 재료 추가</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ffcccb', // 연한 핑크색
    width: '100%', // 전체 너비
    paddingVertical: 15, // 헤더의 상하 패딩 줄임
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    color: '#343a40',
  },
  searchContainer: {
    flexDirection: 'row', // 가로 방향으로 배치
    alignItems: 'center', // 세로 중앙 정렬
    marginVertical: 10, // 여백 추가
    paddingHorizontal: 10, // 여백 조정
  },
  searchInput: {
    flex: 1, // 가로 방향으로 가능한 공간을 모두 차지
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20, // 둥글게 만들기
    paddingHorizontal: 15,
    backgroundColor: '#e0e0e0', // 연한 회색 배경
    marginRight: 10, // 버튼과의 간격 조정
  },
  searchButton: {
    backgroundColor: '#d3d3d3', // 연한 회색
    borderRadius: 20, // 둥글게 만들기
    height: 40, // 검색 바와 동일한 높이
    justifyContent: 'center', // 세로 중앙 정렬
    alignItems: 'center', // 가로 중앙 정렬
    paddingHorizontal: 15, // 여백 조정
  },
  buttonText: {
    color: '#343a40', // 진한 회색
    fontSize: 16,
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
    paddingVertical: 15,
  },
  separator: {
    width: 1,
    backgroundColor: '#e0e0e0',
    height: '80%',
  },
});

export default Recipes;
