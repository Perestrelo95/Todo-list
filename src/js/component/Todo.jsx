import React from "react";

const Todo = ({ todo, eliminarTodo }) => {
	const { nombre, id } = todo;

	return (
		<li className="list-group-item  row justify-content-around">
			<div className="d-grid gap d-md-flex col justify-content-center">
				<div className=" col-2">
					Id:<b> {id} </b>
				</div>
				<div className="d-grid  gap d-md-flex col-2 justify-content-center">
					Descripcion:
					<b> {nombre} </b>
				</div>

				<div className="d-grid gap d-md-flex justify-content-center">
					<button
						className="btn btn-danger p-2 align-text-top justify-content-center "
						onClick={() => eliminarTodo(id)}>
						Eliminar
					</button>
				</div>
			</div>
		</li>
	);
};
export default Todo;