import Todo from './Todo';

function TodoList({ todos, setTodos, filteredTodos }) {
	return (
		<div>
			<ul>
				{filteredTodos.map((todo, i) => {
					return (
						<Todo
							key={i}
							id={todo.id}
							text={todo.text}
							todos={todos}
							setTodos={setTodos}
						/>
					);
				})}
			</ul>
		</div>
	);
}

export default TodoList;
