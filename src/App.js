import React, {useState} from 'react';
import MediaArray from './components/MediaArray';
import MediaDisplay from './components/MediaDisplay';
import './App.css'
import ButtonModal from './components/ButtonModal';


function App() {
  const [globalState, setGlobalState] = useState({
    urls: [],
    userInput:"",
    isPlaying: false,
    playingUrl: ""
  })

  const {urls, userInput} = globalState

  const trackUrl = (e) => {
    
    setGlobalState({...globalState, userInput: e.target.value})
}

const handlePlay = (url) => {
  setGlobalState({...globalState, isPlaying: true, playingUrl: url})
  alert(`${url} is playing`)
}

 const pushToArray =(e) =>{
    e.preventDefault();
    if(userInput===""){
        return;
    } else{
        urls.push(userInput)
        //localStorage.userPlaylist = JSON.stringify(urls);
        window.localStorage.setItem('userPlaylist', JSON.stringify(urls));
        setGlobalState({...globalState, userInput: ""})
        console.log(urls);
    }  
}
  return (
    <div className="wrapper">
      <MediaArray 
      trackUrl={trackUrl} 
      urls={urls} 
      userInput={userInput} 
      pushToArray={pushToArray}
      handlePlay={handlePlay}
      globalState={globalState}
      />
      <MediaDisplay trackUrl={trackUrl} /> 
      <ButtonModal trackUrl={trackUrl}/>
    </div>
  )
}

export default App

