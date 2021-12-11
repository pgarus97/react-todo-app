import React, {Component} from "react"

const TodosContext = React.createContext()


const TodosProvider = TodosContext.Provider
// const TodosConsumer = TodosContext.Consumer

class MyContext extends Component {
    render(){
        return(
            <TodosProvider value={"todos data"}>{this.props.children}</TodosProvider>
        )
    }
}