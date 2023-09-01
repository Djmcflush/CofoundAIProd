import React, { useState, useEffect } from 'react';

import { Input, Button, Checkbox, Typography, Card, List } from 'antd';

import './style.css';

const TodoList = ({ instructions }) => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetch('/api/instructions')
      .then(response => response.json())
      .then(data => setTodos(data));
  }, []);

  const handleToggleCompleted = index => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleRemove = index => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleAdd = newTodo => {
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  return (
    <Card title='Todo List'>
      <List
        dataSource={todos}
        renderItem={(todo, index) => (
          <List.Item>
            <Checkbox
              checked={todo.completed}
              onChange={() => handleToggleCompleted(index)}
            />
            <Typography.Text
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >
              {todo.text}
            </Typography.Text>
            <Button onClick={() => handleRemove(index)}>Remove</Button>
          </List.Item>
        )}
      />
      <form>
        <Input
          type='text'
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
        />
        <Button onClick={() => handleAdd(newTodo)}>Add</Button>
      </form>
    </Card>
  );
};

export default TodoList;
