import React from 'react';
import TodoList from '../components/Todo';

const Todo = () => {
  const [todos, setTodos] = React.useState([]);

  const handleAddTodo = text => {
    setTodos([...todos, { text, completed: false }]);
  };

  const handleToggleCompleted = index => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>TODOt</h1>
      <TodoList
        todos={todos}
        onAddTodo={handleAddTodo}
        onToggleCompleted={handleToggleCompleted}
      />
    </div>
  );
};

export default Todo;
