import React from 'react'
import {TextField, Button }from '@material-ui/core';

const AddTodo = ({addTodoFn}) => {

    const [title, setTitle] = React.useState('');

    return (
        <div>
            <TextField
            id="standard-textarea"
            label="Ingrese tarea"
            placeholder="Placeholder"
            multiline
            value={title}
            onChange={(event)=>setTitle(event.target.value)}
            />
            <Button
            variant="contained"
            color="primary"
            type="button"
            className="button-block"
            onClick={submitTodo}
            >
            Agregar 
            </Button>
        </div>
        
    )

  function submitTodo(){
      const tit = title
      setTitle("")
      addTodoFn(tit)
     
  }

}

export default AddTodo