import React, {useEffect, useState} from 'react';
import classes from './TodoList.module.scss'
import Loader from "../Loader/Loader";
import {useDispatch, useSelector} from "react-redux";
import {asyncDeleteTodo, asyncLoadTodos, asyncToggleCompleteTodo} from "../../redux/todo-reducer";
import {getIsLoading, getTodos} from "../../redux/todo-reducer-selector";

const TodoList = () => {

  const dispatch = useDispatch()

  const [filter, setFilter] = useState('all')
  const todos = useSelector(getTodos)
  const loading = useSelector(getIsLoading)

  useEffect(() => {
    dispatch(asyncLoadTodos())
  }, [dispatch])

  const filterTodos = (items, filter) => {
    switch (filter) {
      case 'all':
        return items
      case 'active':
        return items.filter((element) => !element.completed)
      case 'done':
        return items.filter((element) => element.completed)
      default:
        return items
    }
  }


  const todoBlock = filterTodos(todos, filter).map((todo) => {
    return (
      <div className={ classes.todoContainer } key={ todo.id }>
        <div className={ classes.todoTitle }>
          <p>{ todo.title }</p>
        </div>
        <div className={ classes.todoPanel }>
          <div className={ classes.todoAction + ' ' + classes.delete } onClick={ () => dispatch(asyncDeleteTodo(todo.id)) }>
            <i className="fas fa-trash"></i>
          </div>
          { todo.completed
            ? <div className={ classes.todoAction + ' ' + classes.completed }
                   onClick={ () => dispatch(asyncToggleCompleteTodo(todo.id)) }>
              <i className="fas fa-check-square"></i>
            </div>

            : <div className={ classes.todoAction + ' ' + classes.uncompleted }
                   onClick={ () => dispatch(asyncToggleCompleteTodo(todo.id)) }>
              <i className="fas fa-times"></i>
            </div>
          }
        </div>
      </div>
    )
  })

  return (
    <div className={ classes.todoList }>
      <div className={ classes.sortButtons }>
        <div className={classes.completedTodos}>
          Now completed <span>{4}</span>
        </div>
        <button onClick={ () => setFilter('all') }>All</button>
        <button onClick={ () => setFilter('done') }>Completed</button>
        <button onClick={ () => setFilter('active') }>Not completed</button>
      </div>
      { loading
        ? <Loader />
        : todoBlock
      }
    </div>
  );
};

export default TodoList;