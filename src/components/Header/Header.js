// import React, { useState ,useEffect} from 'react';
// import { Apps, HelpOutline, PersonAddOutlined, FeedbackOutlined, Settings, CameraAltOutlined } from "@material-ui/icons";
// import { makeStyles } from '@material-ui/core/styles';
// import { Badge, Avatar, Button, Popover,Tooltip } from '@mui/material';
// import { auth } from '../../config/firebase';
// import "./styles.css";
// import "./PopoverStyles.css";
// import { useAppContext } from '../Context/appContext';
// import { getCurrentDateTime } from '../../utils/date';
// const useStyles = makeStyles((theme) => ({
//   large: {
//     width: theme.spacing(7),
//     height: theme.spacing(7),
//   },
// }));

// const Header = () => {
//   const classes = useStyles();

//   const [anchorEl, setAnchorEl] = useState(null);
//   const [date,setDate] =useState("");
//   const {currentUser} =useAppContext();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const date=getCurrentDateTime();
//       setDate(date);
//     }, 1000);

//     // Cleanup function to clear the interval
//     return () => clearInterval(interval);
//   }, []);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? "simple-popover" : undefined;

//   return (
//     <div className='header-container'>
//       <div className='header'>
//         <div className='header_logoContainer' >     
//         <img 
//           src='https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_1x_icon_124_40_2373e79660dabbf194273d27aa7ee1f5.png'
//           alt="Google"
//           className="header_logo"
//         />
//         <p>Meet</p>
//         </div>
//         <div className='header_icons'>
//             <div>{date}</div>
//           <Tooltip title="Support">
//           <HelpOutline />
//           </Tooltip>
//           <Tooltip title="Report a Problem">
//         <FeedbackOutlined />
//         </Tooltip>

//         <Tooltip title="Settings">
//         <Settings />
//         </Tooltip>
      
//         <div className='header_iconDivider'></div>
//         <Apps />
//         <Avatar className='header_avatar' onClick={handleClick} />
//         <Popover
//           id={id}
//           open={open}
//           anchorEl={anchorEl}
//           onClose={handleClose}
//           anchorOrigin={{
//             vertical: 'bottom',
//             horizontal: 'center',
//           }}
//           transformOrigin={{
//             vertical: "top"
//           }}
//           sx={{
//             borderRadius:"16px"
//           }}
//         >
//           <div className="home__popoverContainer">
//             <div className="home__popover__top">
//               <Badge
//                 overlap="circular"
//                 anchorOrigin={{
//                   vertical: "bottom",
//                   horizontal: "right",
//                 }}
//                 badgeContent={
//                   <div className="home__badge">
//                     <CameraAltOutlined className="home__camera" />
//                   </div>
//                 }
//               >
//                 <Avatar className={classes.large} />
//               </Badge>
//               <div className="home__text">
//                 <div className="home__displayName">{currentUser?.displayName}</div>
//                 <div className="home__mail">{currentUser?.email}</div>
//               </div>
//               <div className="home__btn">Manage your Google Account</div>
//             </div>

//             <div className="home__popover__btm">
//               <div className="home__addBtn">
//                 <PersonAddOutlined className="home__addIcon" />
//                 <p>Add another account</p>
//               </div>
//               <Button
//                 onClick={()=> {auth.signOut()}}
//                 variant="outlined"
//                 className="home__signOut"
//               >
//                 Sign Out
//               </Button>
//               <div className="home__popover__footer">
//                 <p>Privacy Policy</p>
//                 <span>•</span>
//                 <p>Terms of service</p>
//               </div>
//             </div>
//           </div>
//         </Popover>
//       </div>
//       </div>

//     </div>
//   );
// };

// export default Header;
import { Avatar, Badge, Button, makeStyles } from "@material-ui/core";
import Popover from '@mui/material/Popover';

import {
  Apps,
  CameraAltOutlined,
  FeedbackOutlined,
  HelpOutline,
  PersonAddOutlined,
  Settings,
} from "@material-ui/icons";
import React from "react";
import { auth } from '../../config/firebase';
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const Header = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="header">
      <div className="header__logoContainer">
        <img
          src="https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_1x_icon_124_40_2373e79660dabbf194273d27aa7ee1f5.png"
          alt="google"
          className="header__logo"
        />
        <p>Meet</p>
      </div>

      <div className="header__icons">
        <HelpOutline />
        <FeedbackOutlined />
        <Settings />

        <div className="header__iconDivider" />

        <Apps />
        <Avatar className="header__avatar" onClick={handleClick} />
        <Popover
          open={open}
          id={id}
          onClose={handleClose}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          <div className="home__popoverContainer">
            <div className="home__popover__top">
              <Badge
                overlap="circle"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                badgeContent={
                  <div className="home__badge">
                    <CameraAltOutlined className="home__camera" />
                  </div>
                }
              >
                <Avatar className={classes.large} />
              </Badge>
              <div className="home__text">
                <div className="home__displayName">
                  {/* {currentUser.displayName} */}
                  PULKIT GUPTA
                </div>
                <div className="home__mail">
                  {/* {currentUser.email} */}
                  gpulkit712@gmail.com
                </div>
              </div>
              <div className="home__btn">Manage your google account</div>
            </div>

            <div className="home__popover__btm">
              <div className="home__addBtn">
                <PersonAddOutlined className="home__addIcon" />
                <p>Add another account</p>
              </div>

              <Button
                onClick={() => auth.signOut()}
                variant="outlined"
                className="home__signOut"
              >
                Sign Out
              </Button>

              <div className="home__popover__footer">
                <p>Privacy Policy</p>
                <span>•</span>
                <p>Terms of service</p>
              </div>
            </div>
          </div>
        </Popover>
      </div>
    </div>
  );
};

export default Header;
