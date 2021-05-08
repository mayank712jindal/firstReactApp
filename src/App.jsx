import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';
import './index.css';

function App() {
    return (
        <div className="container text-center ">
            <h1 id="message">Hello Sir,Good {<Message />}</h1>
        </div>
    );
}

export default App;