import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import commonStyles from '../styles'; // styles.js 파일 경로에 맞게 수정
import { Picker } from '@react-native-picker/picker'; // 드롭다운 선택을 위한 라이브러리

const AddItem = ({ navigation }) => {
  const [ingredientName, setIngredientName] = useState('');
  const [category, setCategory] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [isRefrigerated, setIsRefrigerated] = useState(null);

  const handleAdd = () => {
    if (ingredientName && category && expirationDate && isRefrigerated !== null) {
      // 여기서 재료를 추가하는 로직을 추가할 수 있습니다.
      navigation.goBack();
    }
  };

  return (
    <View style={commonStyles.container}>
      <Text style={styles.headerText}>재료 추가하기</Text>

      <TextInput
        style={commonStyles.input}
        placeholder="재료 이름 입력"
        value={ingredientName}
        onChangeText={setIngredientName}
      />

      <Picker
        selectedValue={category}
        style={styles.picker}
        onValueChange={(itemValue) => setCategory(itemValue)}
      >
        <Picker.Item label="분류 선택" value="" />
        <Picker.Item label="야채" value="vegetable" />
        <Picker.Item label="고기" value="meat" />
        <Picker.Item label="해산물" value="seafood" />
        <Picker.Item label="과일" value="fruit" />
        {/* 필요에 따라 추가 분류를 삽입 */}
      </Picker>

      <TextInput
        style={commonStyles.input}
        placeholder="유통기한 (YYYY-MM-DD)"
        value={expirationDate}
        onChangeText={setExpirationDate}
      />

      <View style={styles.radioContainer}>
        <Text>냉장/냉동 여부:</Text>
        <TouchableOpacity onPress={() => setIsRefrigerated(true)} style={[styles.radioButton, isRefrigerated === true && styles.selected]}>
          <Text style={styles.radioText}>냉장</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsRefrigerated(false)} style={[styles.radioButton, isRefrigerated === false && styles.selected]}>
          <Text style={styles.radioText}>냉동</Text>
        </TouchableOpacity>
      </View>

      <Button title="추가" onPress={handleAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    color: '#343a40',
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 15,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  radioButton: {
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'gray',
    marginHorizontal: 10,
    backgroundColor: '#d3d3d3',
  },
  selected: {
    backgroundColor: '#ffcccb',
  },
  radioText: {
    color: '#343a40',
  },
  button: {
    backgroundColor: '#d3d3d3',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#343a40',
    fontSize: 16,
  },
});

export default AddItem;
