import React, { useState } from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { AttachFileOutlined,  SearchOutlined } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import axios from './axios';


function Chat({messages}) {

    const [input, setInput] = useState('');

    const sendMessage =async (e)=>{
        e.preventDefault();
        await axios.post('/messages/new',{
            "message": input,
            "name": "sammed",
            "timestamp": "Just now!",
            "received": true
        });

        setInput(' ');
    };

    return (
        <div className="chat" >
            <div className="chat__header">
                <Avatar src="https://avatars.githubusercontent.com/u/82900434?v=4"/>
                <div className="chat__headerInfo">
                    <h3> Person Name</h3>
                    <p>Last seen at 8:00 AM</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                {
                    messages.map((message)=>(
                        <p   className={`chat__message ${message.received && "chat__received" }`}>
                            <span className="chat__name">{message.name} </span>
                           {message.message}
                            <span className="chat__timeStamp">
                                {message.timestamp}
                            </span>
                        </p>
                    ) )
                }
                    
            </div>
            <div className="chat__footer">
                    <div className="chat__footerIcons">
                    <IconButton>
                        <InsertEmoticonIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileOutlined />
                    </IconButton>
                    </div>
                    <form>
                            <input  value={input} onChange={e=>setInput(e.target.value)} type="text" placeholder="Type a message" />
                            <button onClick={sendMessage} type="submit" >Send</button>
                    </form>
                    <IconButton>
                        <MicIcon />
                    </IconButton>
            </div>
        </div>
    )
}

export default Chat;
