import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './classBased/App';
import { BrowserRouter as Router} from "react-router-dom"

//stylesheet
import "./functionBased/App.css"
import reportWebVitals from './classBased/reportWebVitals';
import TodoContainer from "./functionBased/components/TodoContainer";

const element = <h1>Hello from Create React App</h1>
// component file

//first step for routing: wrap container app
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <TodoContainer/>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
