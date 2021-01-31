import {todoReducer} from "./todo-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from 'redux-saga'
import {todosWatcher} from './redux-saga'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  todoReducer: todoReducer
})


const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(todosWatcher)


export default store