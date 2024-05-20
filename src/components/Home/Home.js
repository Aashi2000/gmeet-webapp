// import React,{useState} from 'react'
// import "./styles.css";
// import { Button, Divider, InputAdornment, TextField } from '@material-ui/core';
// import { VideoCallOutlined } from '@material-ui/icons';
// import { Keyboard } from '@material-ui/icons';
// import  SwipeableTextMobileStepper from "../Mui-extends/Carousel"



// const Home = ({setRoomName,handleSubmit}) => {

//     const [isJoinDisabled, setIsJoinDisabled] = useState(true);

//     const handleRoomNameChange =(e) =>{

//         setRoomName(e.target.value)
//     }
//   return (
//     <div className="hero">
//         <div className="hero__left">
//             <div className="hero__featureText">
//                 <h1  className="hero_title">
//                     Premium video meetings.Now free for everyone.
//                 </h1>
//                 <p className='hero__subtitle'>
//                     We re-engineered the service we built for bussiness meetings,
//                     Google Meet,to make sure it free and available for all
//                 </p>
//             </div>

//             <div className="hero__buttons">
//                 <Button color="primary" 
//                         variant="contained"
//                         className="hero__createdBTN"
//                         onClick={handleSubmit}
//                         sx={{height:"48px" ,background : "black"}}
//                         >
//                     <VideoCallOutlined/>
//                         <p>New Meeting</p>
//                     </Button>
//                     <TextField className="hero__input" variant="outlined" placeholder="Enter a code or a link" onChange={handleRoomNameChange}
//                     InputProps={{
//                         startAdornment:(
//                             <InputAdornment position="start">
//                             <Keyboard className="icon"/>
//                             </InputAdornment>
//                         )
//                     }}/>

//                     <Button className="hero__joinBTN" onClick={handleSubmit}  >Join</Button>
//             </div>

//          <Divider/>
//          <p className="hero__learnMore">Learn More about Google Meet</p>
//         </div>

//         <div className="hero__Right">
//           <SwipeableTextMobileStepper/>
//         </div>
//     </div>
//   )
// }

// export default Home
import React, { useState } from 'react';
import "./styles.css";
import { Button, Divider, InputAdornment, TextField, Snackbar } from '@material-ui/core';
import { VideoCallOutlined } from '@material-ui/icons';
import { Keyboard } from '@material-ui/icons';
import SwipeableTextMobileStepper from "../Mui-extends/Carousel";

const Home = ({ setRoomName: externalSetRoomName, handleSubmit }) => {
    const [roomName, setRoomName] = useState('');
    const [isJoinDisabled, setIsJoinDisabled] = useState(true);
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleRoomNameChange = (e) => {
        const input = e.target.value;
        const regex = /^[a-zA-Z0-9-]*$/; // Regular expression to allow alphanumeric characters and hyphen

        if (input === '' || regex.test(input)) {
            setRoomName(input);
            setIsJoinDisabled(input === ''); // Disable Join button if input is empty
        } else {
            setOpenSnackbar(true); // Show popup message for disallowed characters
        }
    };

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
    };

    const handleJoin = () => {
        if (!isJoinDisabled) {
            handleSubmit(); // Trigger the submit function passed as a prop
        }
    };

    return (
        <div className="hero">
            <div className="hero__left">
                <div className="hero__featureText">
                    <h1 className="hero_title">
                        Premium video meetings. Now free for everyone.
                    </h1>
                    <p className='hero__subtitle'>
                        We re-engineered the service we built for business meetings, Google Meet, to make sure it's free and available for all.
                    </p>
                </div>

                <div className="hero__buttons">
                    <Button
                        color="primary"
                        variant="contained"
                        className="hero__createdBTN"
                        onClick={handleSubmit}
                        sx={{ height: "48px", background: "black" }}
                    >
                        <VideoCallOutlined />
                        <p>New Meeting</p>
                    </Button>
                    <TextField
                        className="hero__input"
                        variant="outlined"
                        placeholder="Enter a code or a link"
                        value={roomName}
                        onChange={handleRoomNameChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Keyboard className="icon" />
                                </InputAdornment>
                            )
                        }}
                    />

                    <Button
                        className="hero__joinBTN"
                        onClick={handleJoin}
                        disabled={isJoinDisabled}
                    >
                        Join
                    </Button>
                </div>

                <Divider />
                <p className="hero__learnMore">Learn More about Google Meet</p>
            </div>

            <div className="hero__Right">
                <SwipeableTextMobileStepper />
            </div>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                message="Special characters are not allowed except hyphen (-)"
            />
        </div>
    );
};

export default Home;




