import React from 'react';
import { useState } from 'react';
import { addTodo } from '../redux/actions';
import { v1 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';

const TodoInput = () => {
    let [name, setName] = useState();
    let dispatch = useDispatch();
    return (
        <div className=" mt-5">
            <label className="font-weight-bold">Input Your Task</label>
            <div className="row">
                <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="col form-control"
                    placeholder="ENTER YOUR TASK"
                    type="text" />
                <button
                    onClick={() => {
                        dispatch(addTodo(
                            {
                                id: uuid(),
                                name: name
                            }
                        ))
                        setName('');
                    }}
                    className="btn btn-primary mx-2"
                >
                    ADD TODO
                 </button>
            </div>
        </div >
    );
};

export default TodoInput;