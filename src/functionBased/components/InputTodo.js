import React, {useState} from "react"

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
            <button className="input-submit">Submit</button>
        </form>
    )
}



export default InputTodo