import React from 'react';
import ReactMarkdown from 'react-markdown'
import {Card, List, ListItem, Paper} from "@mui/material";




function MessageList({ messages }) {
    return (
        <Card>
                {messages.map((message, index) => (
                        <ReactMarkdown children={message.content}/>
                ))}
        </Card>
    );
}

export default MessageList;
