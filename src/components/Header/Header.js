import React, { useState, useEffect } from 'react';
import { HelpOutline, FeedbackOutlined,Settings, Apps, PersonAddOutlined, CameraAltOutlined } from "@material-ui/icons";
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Popover, Tooltip, Button, Badge } from '@mui/material';
import { auth } from '../../config/firebase';
import { useAppContext } from '../Context/appContext';
import {LightbulbOutlined} from "@mui/icons-material"
import { getCurrentDateTime } from '../../utils/date';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText ,Typography,IconButton} from '@mui/material';
import "./styles.css";
import "./PopoverStyles.css";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const Header = () => {
  const classes = useStyles();

  const [supportPopoverAnchorEl, setSupportPopoverAnchorEl] = useState(null);
  const [avatarPopoverAnchorEl, setAvatarPopoverAnchorEl] = useState(null);
  const [date, setDate] = useState("");
  const { currentUser } = useAppContext();
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const date = getCurrentDateTime();
      setDate(date);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSupportPopoverClick = (event) => {
    setSupportPopoverAnchorEl(event.currentTarget);
  };

  const handleAvatarPopoverClick = (event) => {
    setAvatarPopoverAnchorEl(event.currentTarget);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };
  
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  const handlePopoverClose = () => {
    setSupportPopoverAnchorEl(null);
    setAvatarPopoverAnchorEl(null);
  };

  const supportPopoverOpen = Boolean(supportPopoverAnchorEl);
  const avatarPopoverOpen = Boolean(avatarPopoverAnchorEl);

  return (
    <div className='header-container'>
      <div className='header'>
        <div className='header_logoContainer'>
          <img
            src='https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_1x_icon_124_40_2373e79660dabbf194273d27aa7ee1f5.png'
            alt="Google"
            className="header_logo"
          />
          <p>Meet</p>
        </div>
        <div className='header_icons'>
          <div>{date}</div>
          <Tooltip title="Support">
            <HelpOutline onClick={handleSupportPopoverClick} />
          </Tooltip>
          {/* <Tooltip title="Report a Problem">
            <FeedbackOutlined />
          </Tooltip> */}
          <Tooltip title="Report a Problem">
  <FeedbackOutlined onClick={handleDrawerOpen} />
</Tooltip>
          <Tooltip title="Settings">
            <Settings />
          </Tooltip>
          <div className='header_iconDivider'></div>
          <Apps />
          <Avatar className='header_avatar' onClick={handleAvatarPopoverClick} />
          <Popover
  open={supportPopoverOpen}
  anchorEl={supportPopoverAnchorEl}
  onClose={handlePopoverClose}
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'left',
  }}
  transformOrigin={{
    vertical: 'top',
    horizontal: 'left',
  }}
  sx={{
    '& .MuiPaper-root': {
      borderRadius: '8px',
      padding: '10px',
      width: '300px',
      height:'280px'
    },
  }}
>
  <div>
    <ul
      style={{
        listStyle: 'none',
        padding: 0,
        margin: 0,
      
        gap: '20px',
      }}
    >
     <List>
    {/* List items */}
    <ListItem button>
      <ListItemText primary="Help" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Training" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Terms of Service" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Privacy Policy" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Terms Summary" />
    </ListItem>
  </List>
    </ul>
  </div>
</Popover>


          <Popover
            open={avatarPopoverOpen}
            anchorEl={avatarPopoverAnchorEl}
            onClose={handlePopoverClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: "top",
              horizontal:"center"
            }}
            sx={{
              borderRadius: "16px"
            }}
          >
            <div className="home__popoverContainer">
              <div className="home__popover__top">
                <Badge
                  overlap="circular"
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
                  <div className="home__displayName">{currentUser?.displayName}</div>
                  <div className="home__mail">{currentUser?.email}</div>
                </div>
                <div className="home__btn">Manage your Google Account</div>
              </div>

              <div className="home__popover__btm">
                <div className="home__addBtn">
                  <PersonAddOutlined className="home__addIcon" />
                  <p>Add another account</p>
                </div>
                <Button
                  onClick={() => { auth.signOut() }}
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
          <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={handleDrawerClose}
      sx={{ width: 600 }} // Set the width of the Drawer to 600px
    >
      <Box sx={{ width: 400 }}> {/* Ensure the inner Box takes the full width */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px' }}>
          {/* Send feedback to Google */}
          <Typography variant="h6">
            Send feedback to Google
          </Typography>
          
          {/* Close button */}
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        
        <List>
          {/* Image after "Send feedback to Google" */}
          <ListItem sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box component="img" src="https://www.gstatic.com/uservoice/feedback/client/web/live/intent_selection_header.png" alt="Feedback" sx={{ padding: '0 16px', width: '80%', maxWidth: '300px' }} />
          </ListItem>
          
          {/* List items */}
          <ListItem button onClick={handleDrawerClose}>
            <ListItemIcon>
              <FeedbackOutlined />
            </ListItemIcon>
            <ListItemText primary="Report an Issue" />
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            <ListItemIcon>
              <LightbulbOutlined />
            </ListItemIcon>
            <ListItemText primary="Suggest an Idea" />
          </ListItem>
        </List>
      </Box>
    </Drawer>

        </div>
      </div>
    </div>
  );
};

export default Header;
