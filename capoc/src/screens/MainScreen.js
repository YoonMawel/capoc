import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import commonStyles from '../styles'; // styles.js 파일 경로에 맞게 수정

const MainScreen = ({ navigation }) => {
  return (
    <View style={commonStyles.container}>
      <View style={commonStyles.header}>
        <Text style={commonStyles.headerText}>메인 화면</Text>
      </View>
      <View style={{ flexDirection: 'column', justifyContent: 'space-around', width: '80%', marginBottom: 20 }}>
        <TouchableOpacity style={commonStyles.button} onPress={() => navigation.navigate('Ingredients')}>
          <Text style={commonStyles.buttonText}>재료 보기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={commonStyles.button} onPress={() => navigation.navigate('Recipes')}>
          <Text style={commonStyles.buttonText}>레시피 보기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={commonStyles.button} onPress={() => navigation.navigate('AddItem')}>
          <Text style={commonStyles.buttonText}>추가하기</Text>
        </TouchableOpacity>
      </View>
      <View style={commonStyles.footer}>
        <Text style={commonStyles.footerText}>하단 바</Text>
      </View>
    </View>
  );
};

export default MainScreen;
