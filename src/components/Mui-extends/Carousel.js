import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";

const slides = [
  {
    imgPath: "https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg",
    title: "Get a link that you can share",
    description: "Click New meeting to get a link that you can send to people that you want to meet with"
  },
  {
    imgPath: "https://www.gstatic.com/meet/user_edu_scheduling_light_b352efa017e4f8f1ffda43e847820322.svg",
    title: "Plan ahead",
    description: "Click New meeting to schedule meetings in Google Calendar and send invitations to participants"
  },
  {
    imgPath: "https://www.gstatic.com/meet/user_edu_safety_light_e04a2bbb449524ef7e49ea36d5f25b65.svg",
    title: "Your meeting is safe",
    description: "No one can join a meeting unless invited or admitted by the host"
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = slides.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{ maxWidth: 500, flexGrow: 1, display: "flex", alignItems: "center" }}
    >
      <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        )
         : (
          <KeyboardArrowLeft />)
        }
      </Button>

      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {slides.map((slide, index) => (
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }} key={index}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center"
                  }}
                >
                  <img
                    src={slide.imgPath}
                    alt={slide.title}
                    style={{
                      height: 255,
                      maxWidth: 255,
                      width: "100%",
                    }}
                  />
                  <Typography
                    sx={{
                      lineHeight: "2rem",
                      fontSize: "1.5rem",
                      fontWeight: 500,
                      marginBottom: "0.75rem",
                      marginTop: "0.75rem",
                    }}
                  >
                    {slide.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "1rem",
                      fontWeight: 400,
                    }}
                  >
                    {slide.description}
                  </Typography>
                </Box>
              ) : null}
            </Box>
          ))}
        </SwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
        />
      </Box>
      <Button
        size="small"
        onClick={handleNext}
        disabled={activeStep === maxSteps - 1}
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </Button>
    </Box>
  );
}

export default SwipeableTextMobileStepper;

// import * as React from "react";
// import { useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import MobileStepper from "@mui/material/MobileStepper";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// import SwipeableViews from "react-swipeable-views";

// const slides = [
//   {
//     imgPath: "https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg",
//     title: "Get a link that you can share",
//     description: "Click New meeting to get a link that you can send to people that you want to meet with"
//   },
//   {
//     imgPath: "https://www.gstatic.com/meet/user_edu_scheduling_light_b352efa017e4f8f1ffda43e847820322.svg",
//     title: "Plan ahead",
//     description: "Click New meeting to schedule meetings in Google Calendar and send invitations to participants"
//   },
//   {
//     imgPath: "https://www.gstatic.com/meet/user_edu_safety_light_e04a2bbb449524ef7e49ea36d5f25b65.svg",
//     title: "Your meeting is safe",
//     description: "No one can join a meeting unless invited or admitted by the host"
//   },
// ];

// function SwipeableTextMobileStepper() {
//   const theme = useTheme();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const maxSteps = slides.length;

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStepChange = (step) => {
//     setActiveStep(step);
//   };

//   return (
//     <Box
//       sx={{ maxWidth: 500, flexGrow: 1, display: "flex", alignItems: "center" }}
//     >
//       <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
//         {theme.direction === "rtl" ? (
//           <KeyboardArrowRight />
//         ) : (
//           <KeyboardArrowLeft />
//         )}
//       </Button>

//       <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
//         <SwipeableViews
//           axis={theme.direction === "rtl" ? "x-reverse" : "x"}
//           index={activeStep}
//           onChangeIndex={handleStepChange}
//           enableMouseEvents
//         >
//           {slides.map((slide, index) => (
//             <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }} key={index}>
//               {Math.abs(activeStep - index) <= 2 ? (
//                 <Box
//                   component="div"
//                   sx={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     textAlign: "center"
//                   }}
//                 >
//                   <img
//                     src={slide.imgPath}
//                     alt={slide.title}
//                     style={{
//                       height: 255,
//                       maxWidth: 255,
//                       width: "100%",
//                     }}
//                   />
//                   <Typography
//                     sx={{
//                       lineHeight: "2rem",
//                       fontSize: "1.5rem",
//                       fontWeight: 500,
//                       marginBottom: "0.75rem",
//                       marginTop: "0.75rem",
//                     }}
//                   >
//                     {slide.title}
//                   </Typography>
//                   <Typography
//                     sx={{
//                       fontSize: "1rem",
//                       fontWeight: 400,
//                     }}
//                   >
//                     <Box
//                       component="span"
//                       sx={{
//                         display: 'inline-block',
//                         padding: '0.25rem 0.75rem',
//                         marginLeft: '0.5rem',
//                         backgroundColor: theme.palette.primary.main,
//                         color: 'white',
//                         borderRadius: '4px',
//                         cursor: 'pointer',
//                       }}
//                       onClick={() => alert('New Meeting Clicked')}
//                     >
//                       Click New meeting
//                     </Box>
//                     {slide.description.split('Click New meeting')[1]}
//                   </Typography>
//                 </Box>
//               ) : null}
//             </Box>
//           ))}
//         </SwipeableViews>
//         <MobileStepper
//           steps={maxSteps}
//           position="static"
//           activeStep={activeStep}
//         />
//       </Box>
//       <Button
//         size="small"
//         onClick={handleNext}
//         disabled={activeStep === maxSteps - 1}
//       >
//         {theme.direction === "rtl" ? (
//           <KeyboardArrowLeft />
//         ) : (
//           <KeyboardArrowRight />
//         )}
//       </Button>
//     </Box>
//   );
// }

// export default SwipeableTextMobileStepper;
