import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {DefaultButton} from 'pivotal-ui/react/buttons';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React Antoinette </h1>
                </header>
                <DefaultButton>Click Me</DefaultButton>

            </div>
        );
    }
}

export default App;
