import React, { useState } from "react";
import Input from "./Input.jsx";
import Todo from "./Todo.jsx";

const ToDoText = () => {
	const [todos, setTodos] = useState([]);

	const agregarTodo = (todo) => {
		setTodos((old) => [...old, todo]);
	};

	const eliminarTodo = (id) => {
		setTodos((old) => old.filter((item) => item.id !== id));
	};

	return (
		<>
			<Input agregarTodo={agregarTodo} />

			<ul className="list-group list-group-numbered ">
				{todos.map((item) => (
					<Todo
						key={item.id}
						todo={item}
						eliminarTodo={eliminarTodo}
					/>
				))}
			</ul>
			<div>
				<div>
					<small></small>
					<h4 className="bg-primary text-white text-center p-4">
						{todos.length}
					</h4>
				</div>
			</div>
		</>
	);
};

export default ToDoText;
