import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Image, Keyboard, TouchableOpacity} from 'react-native';

function AddTodo({onInsert}) {
    const [text, setText] = useState('');

    const onPress = () => {
        onInsert(text);
        setText('');
        Keyboard.dismiss();
    }
    return (
        <View style={styles.block}>
            <TextInput 
                placeholder="할일을 입력하세요." 
                style={styles.input} 
                value={text}
                onChangeText={setText}
                onSubmitEditing={onPress}
                returnKeyType='done'
            />
            <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
                <View style={styles.buttonStyle}>
                    <Text>추가</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        height: 64,
        paddingHorizontal: 16,
        borderColor: '#bdbdbd',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    input: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 8,
    },
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 48,
        height: 48,
        backgroundColor: '#26a69a',
        borderRadius: 24,
        fontSize: 30,
    }
});

export default AddTodo;