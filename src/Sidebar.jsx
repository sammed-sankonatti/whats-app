import React from 'react';
import './Sidebar.css';
import {Avatar, IconButton} from '@material-ui/core';
import DonutLargeSharpIcon from '@material-ui/icons/DonutLargeSharp';
import MessageIcon from '@material-ui/icons/Message';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';

import SidebarChat from './SidebarChat';


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__avatar">
                    <Avatar src="https://avatars.githubusercontent.com/u/82900434?v=4"/>
                </div>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeSharpIcon />
                    </IconButton>
                    <IconButton>
                        <MessageIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="sidebar__search">
                    <div className="sidebar__searchContainer">
                        <SearchOutlined />
                        <input type="text" placeholder="search or start new chat" />
                    </div>
            </div>

            <div className="sidebar__chats">
                    <SidebarChat />
                    <SidebarChat />
                    <SidebarChat />
                    <SidebarChat />
                    <SidebarChat />
                    <SidebarChat />
                    <SidebarChat />
                    <SidebarChat />

            </div>
        </div>
    )
}

export default Sidebar;
