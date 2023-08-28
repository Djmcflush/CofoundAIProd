import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
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
    <Paper>
      <Typography variant='h4'> Todo List</Typography>
      <List>
        {todos.map((todo, index) => (
          <ListItem key={index}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={todo.completed}
                  onChange={() => handleToggleCompleted(index)}
                />
              }
              label={
                <ListItemText
                  primary={todo.text}
                  style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                  }}
                />
              }
            />
            <Button onClick={() => handleRemove(index)}>Remove</Button>
          </ListItem>
        ))}
      </List>
      <form>
        <TextField
          type='text'
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
        />
        <Button onClick={() => handleAdd(newTodo)}>Add</Button>
      </form>
    </Paper>
  );
};

export default TodoList;
