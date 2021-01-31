


const TOGGLE_LOADING = 'redux-saga-practice/todoReducer/TOGGLE_LOADING'
const SET_TODOS = 'redux-saga-practice/todoReducer/SET_TODOS'
const REMOVE_TODO = 'redux-saga-practice/todoReducer/REMOVE_TODO'
const TOGGLE_COMPLETE_TODO = 'redux-saga-practice/todoReducer/TOGGLE_TODO'
export const ASYNC_LOAD_TODOS = 'redux-saga-practice/todoReducer/ASYNC_LOAD_TODOS'
export const ASYNC_DELETE_TODO = 'redux-saga-practice/todoReducer/ASYNC_DELETE_TODO'
export const ASYNC_TOGGLE_COMPLETE_TODO = 'redux-saga-practice/todoReducer/ASYNC_TOGGLE_COMPLETE_TODO'

const initialState = {
  loading: false,
  todos: []
}


export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      return {
        ...state,
        todos: action.todos
      }
    case TOGGLE_LOADING:
      return {
        ...state,
        loading: action.loading
      }
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      }
    case TOGGLE_COMPLETE_TODO:  
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.id) {
            return {...todo, completed: !todo.completed}
          }
          return todo
        })
      }
    default:
      return state
  }
}


export const actions = {
  toggleLoading(loading) {
    return {
      type: TOGGLE_LOADING,
      loading: loading
    }
  },
  setTodos(todos) {
    return  {
      type: SET_TODOS,
      todos: todos
    }
  },
  removeTodo(id) {
    return {
      type: REMOVE_TODO,
      id: id
    }
  },
  toggleCompletedTodo(id) {
    return {
      type: TOGGLE_COMPLETE_TODO,
      id: id
    }
  }
}


export const asyncLoadTodos = () => {
  return {type: ASYNC_LOAD_TODOS}
}

export const asyncDeleteTodo = (id) => {
  return {type: ASYNC_DELETE_TODO, id: id}
}

export const asyncToggleCompleteTodo = (id) => {
  return {type: ASYNC_TOGGLE_COMPLETE_TODO, id: id}
}