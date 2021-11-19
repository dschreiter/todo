import { useState, useEffect } from 'react';

//components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
	const [inputText, setInputText] = useState('');
	const [todos, setTodos] = useState([]); // complete list
	const [filteredTodos, setFilteredTodos] = useState([]); // filtered list
	const [status, setStatus] = useState('all');

	// console.log(filterStatus);

	const filterStatusHandler = () => {
		if (status === 'completed') {
			setFilteredTodos(
				todos.filter((todo) => {
					return todo.completed === true;
				})
			);
		} else if (status === 'uncompleted') {
			setFilteredTodos(
				todos.filter((todo) => {
					return todo.completed === false;
				})
			);
		} else {
			setFilteredTodos(todos); // show All
		}
	};

	useEffect(() => {
		getLocalTodos();
	}, []);

	useEffect(() => {
		filterStatusHandler();
		saveLocalTodos();
	}, [todos, status]);

	const saveLocalTodos = () => {
		localStorage.setItem('todos', JSON.stringify(todos));
	};

	const getLocalTodos = () => {
		if (localStorage.getItem('todos') === null) {
			localStorage.setItem('todos', JSON.stringify([]));
		} else {
			let todoFromLocal = JSON.parse(localStorage.getItem('todos'));

			setTodos(todoFromLocal);
		}
	};

	return (
		<div className='App'>
			<header>
				<h1>Todo List</h1>
			</header>
			<Form
				inputText={inputText}
				setInputText={setInputText}
				todos={todos}
				setTodos={setTodos}
				setStatus={setStatus} // get status
			/>
			<TodoList
				todos={todos}
				setTodos={setTodos}
				filteredTodos={filteredTodos}
			/>
		</div>
	);
}

export default App;
