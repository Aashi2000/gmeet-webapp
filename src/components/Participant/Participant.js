import React, { useEffect, useRef, useState } from 'react'

const Participant = ({participant}) => {
    const [videoTracks,setVideoTracks]=useState([])
    const [audioTracks,setAudioTracks]=useState([])
    const videoRef=useRef()
    const audioRef = useRef();

const trackpubsToTracks= (trackMap) =>

Array.from(trackMap.values())

.map((publication) => publication.track)

.filter((track) => track !== null);
useEffect(()=>{

     setVideoTracks(trackpubsToTracks(participant.videoTracks));
     setAudioTracks(trackpubsToTracks(participant.audioTracks));

     const trackSubscribed= (track)=>{
         if(track.kind === "video"){
           setVideoTracks((videoTracks)=>[...videoTracks,track]);
        }else if(track.kind === "audio"){
            setAudioTracks((audioTracks)=>[...audioTracks,track])
        }
    };
    const trackUnsubscribed= (track)=>{
        if(track.kind === "video"){
          setVideoTracks((videoTracks)=>videoTracks.filter((v)=>v !== track));
       }else if(track.kind === "audio"){
           setAudioTracks((audioTracks)=>audioTracks.filter((a)=>a !== track));
       }
   };

participant.on("trackSubscribed",trackSubscribed);
participant.on("trackUnsubscribed",trackUnsubscribed);

return ()=>{
    setAudioTracks([])
    setVideoTracks([])
    participant.removeAllListener()
}

},[participant]);


useEffect(()=>{
    const videoTrack = videoTracks[0];

    if(videoTrack){
        videoTrack.attach(videoRef.current);
        return ()=>{
            videoTrack.detach();
        };
    }
},[videoTracks]);


useEffect(()=>{
    const audioTrack = audioTracks[0];

    if(audioTrack){
        audioTrack.attach(videoRef.current);
        return ()=>{
            audioTrack.detach();
        };
    }
},[audioTracks]);
  return (
    <div className="participant">
        <h>{participant.identity}</h>
        <video ref={videoRef} autoPlay/>
        <audio ref={audioRef} autoPlay muted/>
    </div>
  )
}

export default Participant
