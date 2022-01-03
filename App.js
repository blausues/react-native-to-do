import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import DateHead from './components/DateHead';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';
import TodoList from './components/TodoList';

const App = () => {
    const today = new Date();
    const [todos, setTodos] = useState([
        {id: 1, text: '할 일 1', done: true},
        {id: 2, text: '할 일 2', done: false},
        {id: 3, text: '할 일 3', done: false},
    ]);

    const onInsert = text => {
        const nextId =
            todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
        const todo = {
            id: nextId,
            text,
            done: false,
        };

        setTodos(todos.concat(todo));
    };

    const onToggle = id => {
        const nextTodos = todos.map(todo =>
            todo.id === id ? {...todo, done: !todo.done} : todo
        );
        setTodos(nextTodos);
    };

    const onRemove = id => {
        const nextTodos = todos.filter(todo => todo.id !== id);
        setTodos(nextTodos);
    };

    return (
        <SafeAreaView style={styles.block}>
            <DateHead date={today} />
            {todos.length === 0 ? (
                <Empty />
            ) : (
                <TodoList
                    todos={todos}
                    onToggle={onToggle}
                    onRemove={onRemove}
                />
            )}
            <AddTodo onInsert={onInsert} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    block: {
        flex: 1,
    },
});

export default App;
