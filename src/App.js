import './App.css';
import React from 'react';
import { Login } from './components';
import { useAppContext } from './components/Context/appContext';
import  VideoChat  from './VideoChat';
function App() {
  const {appState} = useAppContext();
  return (
    <div className="App">
      {appState === "login" && <Login/>}
      {appState === "home" && (

        <main>
          <VideoChat />
        </main>
    //   <>
    //     <Header explain={appState} />
    //     <Home />
    //  <
      )}
     </div>
  );
}

export default App;
