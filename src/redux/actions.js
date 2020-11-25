export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export function addTodo(todo) {
    return {
        type: ADD_TODO,
        payload: todo,
    }
}

export function removeTodo(todoId) {
    return {
        type: REMOVE_TODO,
        payload: todoId,
    }
}

export function updateTodo(todo) {
    return {
        type: UPDATE_TODO,
        payload: todo,
    }
}