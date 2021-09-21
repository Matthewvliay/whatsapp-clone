import React, { useState, useEffect } from 'react';
import SidebarChat from './SidebarChat'
import { Avatar, IconButton } from '@material-ui/core'

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';
import { useStateValue } from './StateProvider'

import './Sidebar.css';

import db from './firebase.js'
// console.log(db);
function Sidebar() {
    const [rooms, setRooms] = useState([]);
    const [{ user }, dispatch] = useStateValue();

    //runs when sidebar component loads
    // doc is each item in the database.
    //notice, each has a unique id. (similar to localStorage/UUID4)
    // db.collection("rooms").onSnapshot((snapshot) =>
    // )

    useEffect(() => {

        const unsubscribe = db.collection('rooms').onSnapshot((snapshot) => {
            setRooms(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        })
        return () => {
            unsubscribe(); // stops watching when database is no longer needed.
        }
    })


    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src={user?.photoURL} />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat addNewChat />
                {rooms.map(room => (
                    <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                ))}
            </div>
        </div>
    )
}
export default Sidebar
