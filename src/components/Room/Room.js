import React, { useEffect,useState } from 'react'
import Participant from '../Participant/Participant'; 
import TopHeader from '../TopHeader/TopHeader';
const Room = ({roomName,room,handleLogout}) => {

    const [participants,setParticipants]=useState([])
    useEffect(() => {

        const participantConnected= (participant)=>{
             setParticipants(prevParticipants =>[...prevParticipants,participant])
        }

        const participantDisconnected = (participant) =>{
            setParticipants((prevParticipants) =>
                prevParticipants.filter((p)=>p !== participant));
            };
        

        room.on("participantConnected",participantConnected);
        room.on("participantDisconnected",participantDisconnected);
        room.participants.forEach(participantConnected);

        return () =>{
            room.off("participantConnected",participantConnected)
            room.off("participantDisconnected",participantDisconnected)
        }
    },[room]);
      
    const remoteParticpants = participants.map((participant)=>(

          <Participant key={participant.id} participant={participant}/>
    ))
        
    return (

        <main className="room">
        <TopHeader participant={room.localParticipant}/>
        <h2>Room: {roomName}</h2>
        
        <button onClick={handleLogout}>Leave Meeting</button>
        
        <div className="all-participants">
            { room && (
        <Participant key={room.localParticipant.sid}
        participant={room.localParticipant}/>
        )}

        {remoteParticpants}
        </div>    
        </main>
    
    )}

export default Room;
