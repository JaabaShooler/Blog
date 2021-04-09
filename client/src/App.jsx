import React from 'react';
import Main from "./Components/Main/Main";
import Post from "./Components/Post/Post";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import "./Sass/Transition.css"
import "./Sass/App.sass"

const App = () => {

    const routes = [
        {path: '/post',  Component: Post},
        {path: '/', Component: Main },
    ]

    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route  path='/post'  component={Post}/>
                    <Route exect path='/' component={Main}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
