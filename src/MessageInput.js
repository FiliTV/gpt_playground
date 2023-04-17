import React from 'react';
import {Button, TextareaAutosize} from "@mui/material";

function MessageInput({ add ,value,setValue }) {

    return (
        <div>
            <TextareaAutosize
                minRows={20}
                maxRows={20}
                placeholder="Enter your text here..."
                style={{ width: '100%' }}
                value={value} onChange={(event) => setValue(event.target.value)}
            />
            <Button variant="outlined" onClick={add}>Add</Button>
        </div>
    );
}

export default MessageInput;
