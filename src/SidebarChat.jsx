import { Avatar } from '@material-ui/core';
import React from 'react';
import './SIdebarChat.css';


function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar src="https://avatars.githubusercontent.com/u/82900434?v=4"/>
            <div className="sidebarChat__info">
                <h2>sammed</h2>
                <p>Last seen : Never</p>
            </div>
        </div>
    )
}

export default SidebarChat;
