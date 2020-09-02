import React, {useEffect, useState} from 'react'
import ToDoItem from '../ToDoItem/ToDoItem'
// hooks react redux
import {useDispatch, useSelector} from 'react-redux'

// importamos la acción
import {obtenerTodoAction} from '../../../redux/todoDucks'

const Todos = ({idUser, newTitle}) => {
  
    const [toDos, setToDos] = useState([])
    // declaramos displach para llamar a la acción o acciones
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(obtenerTodoAction(idUser));
        
    }, [dispatch, idUser])

    
    // crearmos el state utilizando nuestra tienda
    const todos = useSelector(store =>{
        return store.toDo.array 
    })
    //asignamos el array de nuestra tienda al estado local
    useEffect(() => {
      
        if(newTitle===""){
            setToDos(todos)
        }
    }, [todos])

    const changeComplete = (e,id) =>{

     let nuevoA =   toDos.map((item)=>{
            if (item.id ===id){
                item.completed = e
            }
        })
        console.log("nuevo Array", nuevoA)
    }

    useEffect(() => {
        if(newTitle!==""){
            let id = Math.floor(Math.random() * 100);     
            let newTodo = {completed:false,id:100+id ,title:newTitle, userId:idUser }
            toDos.push(newTodo)
        }
    }, [newTitle]) 
    
    return (
        <div>
            <h1>Todo list</h1>
                {
                    toDos.map(item => (
                        <ToDoItem item={item} changeCompleted={changeComplete}/>
                    ))
                }
        </div>
    )
   
}

export default Todos