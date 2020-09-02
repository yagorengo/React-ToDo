import React, {useEffect} from 'react'
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListAltIcon from '@material-ui/icons/ListAlt';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import Switch from '@material-ui/core/Switch';
const ToDoItem = ({item,changeCompleted}) => {


    return (
        <div>
            <ListItem>
            <ListItemIcon>
                <ListAltIcon />
            </ListItemIcon>
            <ListItemText id={item.id} primary={item.title} />
            <ListItemSecondaryAction>
            <Switch
                edge="end"
                checked={item.completed}
                onChange={(event)=>handleOnChange(item)}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            </ListItemSecondaryAction>
        </ListItem>
        </div>
    )

    function handleOnChange(item){
      changeCompleted(item)
    }
}

export default ToDoItem