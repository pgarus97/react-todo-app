import React , {useState, useEffect} from "react"
import TodosList from "./TodosList"
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";
import { Route, Routes} from "react-router-dom"
import About from "../pages/About"
import NotMatch from "../pages/NotMatch"
import Navbar from "./Navbar";

const TodoContainer = () => {


    const [todos, setTodos] = useState(getInitialTodos())


    const handleChange = id => {
        //important to know that prevState can be accessed
        setTodos(prevState =>
            prevState.map(todo => {
                if(todo.id === id){
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }
                return todo;
            })
        )
    }

    const delTodo = id => {
        setTodos([
            ...todos.filter(todo => {
                return todo.id !== id;
            })
        ])
    }

    const addTodoItem = title => {
        const newTodo = {
            id:uuidv4(),
            title:title,
            completed:false
        };
        setTodos([...todos, newTodo])
    }

    const setUpdate = (updatedTitle, id) => {
       setTodos(
           todos.map(todo => {
               if (todo.id === id) {
                   todo.title = updatedTitle
               }
               return todo
           })
       )
    }

    //for lifecycle functions  didMount and didUpdate ; () as argument = function
    //by default on every render, else array dependency needed; empty if no value from render/component needed
    //otherwise everything needed like states, functions, props need to be added
    /*
    useEffect(() => {
        console.log("test run")

        //getting stored items form local storage
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)

        if(loadedTodos){
            setTodos(loadedTodos)
        }
    }, []);
    */

    //second method instead of setTodos in Effect (double render):
    function getInitialTodos(){
        //getting stored items
        const temp = localStorage.getItem("todos")
        const savedTodos = JSON.parse(temp)
        return savedTodos || [] // or fallback empty array
    }

    //only reruns if dependency changes; if empty it only does it on mount; this equals didUpdate
    useEffect(() => {
        //storing todo items
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos",temp)
    },[todos])


    //Route path="*" is a fallback and matches everything
    return(
        <>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={
                    <div className="container">
                        <div className="inner">
                            <Header />
                            <InputTodo addTodoProps={addTodoItem}/>
                            <TodosList
                                todos={todos}
                                handleChangeProps={handleChange}
                                deleteTodoProps={delTodo}
                                setUpdate={setUpdate}
                            />
                        </div>
                    </div>
                } />
                <Route path="/about" element={
                    <About />
                } />
                <Route path="*" element={
                    <NotMatch />
                } />
            </Routes>
        </>

    )

}
export default TodoContainer