import React from 'react'
import "./styles.css";
import { Button, Divider, InputAdornment, TextField } from '@material-ui/core';
import { VideoCallOutlined } from '@material-ui/icons';
import { Keyboard } from '@material-ui/icons';
import  SwipeableTextMobileStepper from "../Mui-extends/Carousel"



const Home = ({setRoomName,handleSubmit}) => {
    const handleRoomNameChange =(e) =>{
        setRoomName(e.target.value)
    }
  return (
    <div className="hero">
        <div className="hero__left">
            <div className="hero__featureText">
                <h1  className="hero_title">
                    Premium video meetings.Now free for everyone.
                </h1>
                <p className='hero__subtitle'>
                    We re-engineered the service we built for bussiness meetings,
                    Google Meet,to make sure it free and available for all
                </p>
            </div>

            <div className="hero__buttons">
                <Button color="primary" 
                        variant="contained"
                        className="hero__createdBTN"
                        onClick={handleSubmit}
                        sx={{height:"48px" ,background : "black"}}
                        >
                    <VideoCallOutlined/>
                        <p>New Meeting</p>
                    </Button>
                    <TextField className="hero__input" variant="outlined" placeholder="Enter a code or a link" onChange={handleRoomNameChange}
                    InputProps={{
                        startAdornment:(
                            <InputAdornment position="start">
                            <Keyboard className="icon"/>
                            </InputAdornment>
                        )
                    }}/>

                    <Button className="hero__joinBTN" onClick={handleSubmit}>Join</Button>
            </div>

         <Divider/>
         <p className="hero__learnMore">Learn More about Google Meet</p>
        </div>

        <div className="hero__Right">
          <SwipeableTextMobileStepper/>
        </div>
    </div>
  )
}

export default Home
