import React from 'react'
import {Provider} from 'react-redux'
import generateStore from '../../redux/store'
import Todos from './ToDoList/ToDoList'
import AddToDo from './AddToDo/AddToDo'


const Home = ({user}) => {

  const [newTodo, setNewTodo] = React.useState('');

  const AddTodo = (todo)=> {
   setNewTodo(todo)
  }

    const store = generateStore()
    return (
      <Provider store={store}>
        <Todos idUser={user} newTitle={newTodo} />
        <AddToDo addTodoFn={AddTodo}/>
      </Provider>
    )
}

export default Home