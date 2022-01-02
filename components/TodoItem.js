import React, {useState} from 'react';
import {FlatList, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function TodoItem({id, text, done, onToggle, onRemove}) {
    return (
        <View style={styles.item}>
            <TouchableOpacity onPress={() => onToggle(id)}>
                <View style={[styles.circle, done && styles.filled]}></View>
            </TouchableOpacity>
            <Text style={[styles.text, done && styles.lineThrough]}>{text}</Text>
            <TouchableOpacity onPress={() => onRemove(id)}>
                <Icon name="delete" size={32} color="red" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        padding: 16,
        alignItems: 'center',
    },
    circle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderColor: '#26a69a',
        borderWidth: 1,
        marginRight: 16,
    },
    filled: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#26a69a',
    },
    text: {
        flex: 1,
        fontSize: 16,
        color: '#212121',
    },
    lineThrough: {
        color: '#9e9e9e',
        textDecorationLine: 'line-through',
    }
});

export default TodoItem;