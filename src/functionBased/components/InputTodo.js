import React, {useState} from "react"
import { FaPlusCircle } from "react-icons/fa"
import { IconContext } from "react-icons"



//function type ; react hooks only on top level, not conditionals, loops, functions etc.
const InputTodo = props => {
    //IMPORTANT: first value is state variable, second is update state function ; JS array destructuring
    //can also use multiple hooks for multiple states/fields
    const [inputText, setInputText] = useState({
        //state is now an object and not only a string
        title:"",
    })

    const onChange = e => {
        setInputText({
            //needed for more than one text field
            ...inputText,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(inputText.title.trim()) {
            props.addTodoProps(inputText.title)
            setInputText({
                title:"",
            })
        }else{
            alert("Please write item")
        }
    }

    //what gets rendered
    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input type="text"
                   className="input-text"
                   placeholder="Add Todo..."
                   value={inputText.title}
                   name="title"
                   onChange={onChange}
            />
            <button className="input-submit">
                <FaPlusCircle
                    style={{ color: "darkcyan", fontSize: "20px", marginTop: "2px" }}
                />
            </button>
        </form>
    )

        /*
        //In case of multiple icons next to each other styling with context
        <IconContext.Provider
      value={{
        color: "darkcyan",
        style: { fontSize: "20px", color: "#ff0000" },
        className: "submit-iconn",
      }}
    >
      <button className="input-submit">
        <FaPlusCircle />
        <FaPlusCircle />
        <FaPlusCircle />
      </button>
    </IconContext.Provider>

         */
}



export default InputTodo