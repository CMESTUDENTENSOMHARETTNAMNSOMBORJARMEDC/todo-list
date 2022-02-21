import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import TodoBuilder from './components/TodoBuilder';
import TodoList from './components/TodoList';

function App() {

	const [todos, setTodos] = useState([]);
	const [currentId, setId] = useState(0);

	function getNewId() {
		setId(currentId + 1);
		return currentId;
	}

	function makeTodoAdder(todoList) {
		return ({ text }) => {
    		setTodos([...todoList, {id: getNewId(), text: text}]);
		};
	}

	function makeTodoRemover(todoList) {
		return (id) => {
    		setTodos(todos.filter(todo => todo.id !== id));
		};
	}


    return (
        <div className="App">
	        <TodoBuilder todoAdder={makeTodoAdder(todos)} />
    	    <TodoList todoList={todos} todoRemover={makeTodoRemover(todos)} />
        </div>
    );
}

export default App;
