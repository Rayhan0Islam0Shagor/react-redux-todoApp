import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../redux/actions';

const TodoItem = ({ todo }) => {
    const [editAble, setEditAble] = useState(false);
    const [name, setName] = useState(todo.name)
    let dispatch = useDispatch();
    return (
        <div className="row mx-2 align-items-center">
            <div>
                <h4>#{todo.id.length > 1 ? todo.id[2] : todo.id}</h4>
            </div>

            <div className="col">
                {
                    editAble ?
                        <input
                            onChange={
                                (e) => {
                                    setName(e.target.value)
                                }
                            }
                            className="form-control"
                            defaultValue={todo.name}
                            type="text" />
                        :
                        <h4 className="text-uppercase">{todo.name}</h4>
                }
            </div>

            <button
                onClick={() => {
                    dispatch(updateTodo(
                        {
                            ...todo,
                            name: name
                        }
                    ))
                    if (editAble) {
                        setName(todo.name);
                    }
                    setEditAble(!editAble);
                }}
                className="btn btn-warning mr-2 mb-2"
            >
                {editAble ? "Update" : "Edit"}
            </button>

            <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="btn btn-danger ml-2 mb-2"
            >Delete</button>
        </div>
    );
};

export default TodoItem;