function Todo({ id, text, todos, setTodos }) {
	//Events
	const completeHandler = () => {
		setTodos(
			todos.map((item) => {
				//console.log(item);
				if (item.id === id) {
					return { ...item, completed: !item.completed }; // reverse current Bool,
				} else {
					return item;
				}
			})
		);
	};

	const deleteHandler = () => {
		setTodos(
			todos.filter((item) => {
				return item.id !== id; //keep all the todos, which are not equal to the id of the one clicked
			})
		);
	};

	return (
		<div>
			<li>{text}</li>
			<button onClick={completeHandler}>Completed</button>
			<button onClick={deleteHandler}>delete</button>
		</div>
	);
}

export default Todo;
