import React, { useCallback, useEffect, useState } from 'react'
import {v4 as uuid4v} from 'uuid'
import { useAppContext } from './components/Context/appContext';
import Video from 'twilio-video'
import Room from './components/Room/Room';
import { Header } from './components';
import { Home } from './components';
import { CircularProgress } from '@material-ui/core';
const VideoChat = () => {

    const [roomName ,setRoomName]=useState(uuid4v());
    const [room ,setRoom ] = useState(null);
    const [username,setUsername] = useState("");

    const {currentUser,connecting,setConnecting}=useAppContext();
    useEffect(()=>{
        if(currentUser){
            setUsername(currentUser.email);
        }
    },[currentUser]);

    // const handleSubmit = useCallback(async ()=>{
    //     setConnecting(true);
    //     const data = await fetch("/video/token",{
    //         method: "POST",
    //         body: JSON.stringify({
    //             identity:username,
    //             room:roomName
    //         }),
    //         headers:{
    //             "Content-Type":"application/json"
    //         }
    //     }).then((res)=>res.json());
    //     Video.connect(data.token,{
    //         name:roomName
    //     }).then((room) =>{
    //         setConnecting(false)
    //         setRoom(room)
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //         setConnecting(false)
    //     })
    // },[roomName,username,setConnecting])
    const handleSubmit = useCallback(async () => {
        setConnecting(true);
      

        const data = await fetch("/video/token", {

          method: "POST",
          body: JSON.stringify({
            identity: username,
            room: roomName,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => res.json());
        Video.connect(data.token, {
          name: roomName,
        })
          .then((room) => {
            setConnecting(false);
            setRoom(room);
          })
          .catch((err) => {
            console.error(err);
            setConnecting(false);
          });
      }, [roomName, username,setConnecting]);
     
    const handleLogout=useCallback(()=>{
        setRoom((prevRoom)=>{
            if(prevRoom){
                prevRoom.localParticipant.tracks.forEach((trackPub)=>{
                    trackPub.track.stop()
                });
                prevRoom.disconnect();
            }
        })
    },[])

    useEffect(() => {
        
        if (room) {
            
        const tidyUp =(event) => {
        if (event.persisted) {
        return;
        }
        if (room) {        
        handleLogout();
        }
        };    
        window.addEventListener("pagehide", tidyUp)
        window.addEventListener("beforeunload", tidyUp)
        
        return ()=>{
        window.addEventListener("pagehide", tidyUp)
        window.addEventListener("beforeunload",tidyUp)
}
}
},[room,handleLogout]);
    let render;
    if(room){

render =(<Room roomName={roomName} room={room} handleLogout={handleLogout}/>)
    }else{
        render=(
            <>
            {
                connecting ? (
                    <div className="loading">
                        <CircularProgress/>
                        <h1 className="loading_text">Loading...</h1>
                    </div>
                ): (
                    <>
                    <Header/>

                    <Home handleSubmit={handleSubmit} setRoomName={setRoomName}/>
                    </>
                )
            }
            </>
        )
    }
    return render;
}

export default VideoChat;
