import React, {useEffect, useState} from 'react';
import MessageList from './MessageList';
import {CircularProgress, Grid} from "@mui/material";
import MessageInput from "./MessageInput";
import axios from "axios";


function App() {
    const [messages, setMessages] = useState([]);
    const [value, setValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        console.log('Component mounted');
        console.log(messages);
        return () => {
            console.log('Component unmounted');
        };
    }, );

    function add() {

        setIsLoading(true);

        let before = [...messages, {
            role : "user",
            content : value
        }];
        var options = {
            method: 'POST',
            url: 'http://localhost:5000/',
            headers: {'Content-Type': 'application/json'},
            data: {
                messages: before
            }
        };

        axios.request(options).then(function (response) {
            setMessages(response.data);
            setIsLoading(false);
        }).catch(function (error) {
            console.error(error);
            setIsLoading(false);
        });


    }


    return (
        <Grid container spacing={2}>

            <Grid item xs={12} md={6}>
                {isLoading && (
                    <div>
                        <CircularProgress/>
                    </div>
                )}
                <MessageInput add={add} value={value} setValue={setValue}/>
            </Grid>
            <Grid item xs={12} md={6} style={{height: '500px', overflow: 'auto'}}>
                <MessageList messages={messages}/>
            </Grid>
        </Grid>
    );
}


export default App;
