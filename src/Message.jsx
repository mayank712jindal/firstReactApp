import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Message() {
    const messageColor = {};
    let msg = "";
    let date = new Date(2021, 5, 5, 6);
    date = date.getHours();
    if (date > 0 && date < 12) {
        msg = "Morning";
        messageColor.color = "green";
    }
    else if (date > 11 && date < 20) {
        msg = "Afternoon"
        messageColor.color = "orange"
    }
    else {
        msg = "Evening";
        messageColor.color = "black"
    }

    return <span style={messageColor}>{msg}</span>;
}

export default Message;
