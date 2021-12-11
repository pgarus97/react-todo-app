import React , {useState,useEffect} from "react"
import styles from "./TodoItem.module.css"

const TodoItem = props => {
    const [editing, setEditing] = useState(false)

    const handleEditing = () => {
        setEditing(true)
    }

    //displays keystrokes with keydown
    const handleUpdatedDone = event => {
        if (event.key === "Enter"){
            setEditing(false)
        }
    }

    const completedStyle= {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
    }

    const {completed, id, title} = props.todo

    let viewMode = {}
    let editMode = {}

    if(editing){
        viewMode.display = "none"
    } else {
        editMode.display = "none"
    }

    //didUnmount equivalent, return function gets called on unmount, only once if no dependency = empty array
    useEffect(() =>{
        return() => {
            console.log("cleaning up...")
        }
    },[])

    return(
        <li className={styles.item}>
            <div onDoubleClick={handleEditing}
                 //for multiple conditions
                 style={(!completed && editing===false) ? viewMode : (completed && editing===false ? editMode : (completed && editing===true ? editMode : viewMode))}>...</div>
            <input type={"checkbox"}
                   style={viewMode}
                   className={styles.checkbox}
                   checked={completed}
                   onChange={() => props.handleChangeProps(id)}
            />
            <button onClick={() => props.deleteTodoProps(id)}>Delete</button>
            <span style={completed ? completedStyle : null}>{title}</span>
            <input type={"text"}
                   style={editMode}
                   className={styles.textInput}
                   value={title}
                   onChange={e => {
                        props.setUpdate(e.target.value, id)
                   }}
                   onKeyDown={handleUpdatedDone}
            />
        </li>
    );

}
export default TodoItem