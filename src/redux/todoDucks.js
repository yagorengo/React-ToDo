import axios from 'axios'
// constantes
const dataInicial = {
    array: []
}

// types
const GET_TODO_SUCCESS = 'GET_TODO_SUCCESS'

// reducer
export default function todoReducer(state = dataInicial, action){
    switch(action.type){
        case GET_TODO_SUCCESS:
            return {...state, array: action.payload}
        default:
            return state
    }
}

// actions
export const obtenerTodoAction = (idUser) => async (dispatch, getState) => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos').then((todos)=> {
           let todosFilter = todos.data.filter(todo => todo.userId === idUser)
           return todosFilter
        })
        dispatch({
            type: GET_TODO_SUCCESS,
            payload: res
        })
    } catch (error) {
        console.log(error)
    }
}