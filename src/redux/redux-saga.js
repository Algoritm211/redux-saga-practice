import {call, put, takeEvery} from "redux-saga/effects";
import {actions, ASYNC_DELETE_TODO, ASYNC_LOAD_TODOS, ASYNC_TOGGLE_COMPLETE_TODO} from "./todo-reducer";
import {todoAPI} from "../api/todos-api";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

function* fetchTodosWorker() {
  const data = yield call(todoAPI.getTodos)
  yield put(actions.setTodos(data))
}

function* deleteTodosWorker({id}) {
  yield delay(1000)
  yield put(actions.removeTodo(id))
}

function* asyncToggleTodo({id}) {
  yield delay(1000)
  yield put(actions.toggleCompletedTodo(id))
}


export function* todosWatcher () {
  yield takeEvery(ASYNC_LOAD_TODOS, fetchTodosWorker)
  yield takeEvery(ASYNC_DELETE_TODO, deleteTodosWorker)
  yield takeEvery(ASYNC_TOGGLE_COMPLETE_TODO, asyncToggleTodo)
}