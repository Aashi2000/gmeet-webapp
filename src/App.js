// import './App.css';
// import React from 'react';
// import { Login } from './components';
// import { useAppContext } from './components/Context/appContext';
// import AutoselectingInput from './AutoselectingInput.js';

// import  VideoChat  from './VideoChat';
// function App() {
//   const {appState} = useAppContext();
//   return (
//     <div className="App">
//       {appState === "login" && <Login/>}
//       {appState === "home" && (

//         <main>
//         <AutoselectingInput />

//           <VideoChat />
//         </main>
//     //   <>
//     //     <Header explain={appState} />
//     //     <Home />
//     //  <
//       )}
//      </div>
//   );
// }

// export default App;
// import { useState } from 'react';
// import AutoselectingInput from './AutoselectingInput.js';

// export default function App() {
//   const [show, setShow] = useState(false);
//   return (
//     <>
//       <button onClick={() => setShow(true)}>
//         Show example
//       </button>
//       <hr />
//       {show && <AutoselectingInput />}
//     </>
//   );
// }

import './App.css';
import React from 'react';
import { Login } from './components';
import { useAppContext } from './components/Context/appContext';
import AutoselectingInput from './AutoselectingInput.js';
import VideoChat from './VideoChat';

function App() {
  const { appState } = useAppContext();

  return (
    <div className="App">
      {appState === "login" && <Login />}
      {appState === "home" && (
        <main>
          <AutoselectingInput />
          <VideoChat />
        </main>
      )}
    </div>
  );
}

export default App;
