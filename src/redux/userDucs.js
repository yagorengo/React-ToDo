// constantes
const dataInicial = {
    array: [
    {userName:'User1', id: 1, password:"pass1"},
    {userName:'User2', id: 2, password:"pass2"},
    {userName:'User3', id: 3, password:"pass3"},
    {userName:'User4', id: 4, password:"pass4"},
    {userName:'User5', id: 5, password:"pass5"}
    ]
}

// types
const GET_USER_SUCCESS = 'GET_USER_SUCCESS'

// reducer
export default function userReducer(state = dataInicial, action){
    switch(action.type){
        case GET_USER_SUCCESS:
            return {...state, array: action.payload}
        default:
            return state
    }
}


