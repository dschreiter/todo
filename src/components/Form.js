function Form({ inputText, setInputText, todos, setTodos, setStatus }) {
	const inputTextHandler = (e) => {
		setInputText(e.target.value); // get the input value
	};

	const submitTodoHandler = (e) => {
		e.preventDefault();
		setTodos([
			...todos,
			{ text: inputText, completed: false, id: Math.random() * 1000 },
		]); // set the input value,  pass to setTodos
		setInputText(''); // clear the input
	};

	const statusHandler = (e) => {
		setStatus(e.target.value);
	};

	return (
		<form>
			<input
				value={inputText}
				onChange={inputTextHandler}
				type='text'
				className='todo-input'
			/>
			<button
				onClick={submitTodoHandler}
				className='todo-button'
				type='submit'
			>
				<i className='fas fa-plus-square'>+</i>
			</button>
			<div className='select'>
				<select
					onChange={statusHandler}
					name='todos'
					className='filter-todo'
				>
					<option value='all'>All</option>
					<option value='completed'>Completed</option>
					<option value='uncompleted'>Uncompleted</option>
				</select>
			</div>
		</form>
	);
}

export default Form;
