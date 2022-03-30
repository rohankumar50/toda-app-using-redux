import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from '../actions';
import './todo.css';

const Todo = () => {

    const [inputData, setInputData] = useState('');
    const list = useSelector((elem) => {
        return elem.todoReducer.list
    });
    const dispatch = useDispatch();
    return (
        <div className='main-div'>
            <div className="child-div">
                <figure>
                    <figcaption>
                        Add Your List Here
                    </figcaption>
                </figure>
                <div className="addItems">
                    <input type="text" placeholder='Add Items ✍️' value={inputData} onChange={(event) => setInputData(event.target.value)} />
                    <i className='fa fa-plus add-btn' onClick={() => dispatch(addTodo(inputData), setInputData(''))}></i>
                </div>
                {
                    list.map((elem) => {
                        return (
                            <div className="todos" key={elem.id}>
                                <h3>{elem.data}</h3>
                                <i className='fa fa-trash del-btn' title='Delete Item' onClick={() => { dispatch(deleteTodo(elem.id)) }}></i>
                            </div>
                        )

                    })
                }

                <div className="removeAll">
                    <button className='removeAll_btn' onClick={() => dispatch(removeTodo())}>
                        Remove All
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Todo;