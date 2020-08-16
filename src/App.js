import React, {useState, useEffect, useRef} from 'react';
import MediaArray from './components/MediaArray';
import MediaDisplay from './components/MediaDisplay';
import './App.css'
import ButtonPanel from './components/ButtonPanel';
import {songsArr} from "./utils/data"
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [globalState, setGlobalState] = useState({
    urls: [],
    userInput:"",
    trackName: "",
    isPlaying: false,
    playingUrl: "",
    currentIndex: null
  })
  const [playing, setPlaying] = useState(false)
  const [currentPlaying, setCurrentPlaying] = useState(null)


  const audioRef = useRef(null)

  useEffect(() => {
  
    const data = localStorage.getItem("test")
    const parsed = JSON.parse(data)
    if (parsed) {
      setGlobalState({...globalState, urls: parsed})
    } else {
      setGlobalState({...globalState, urls: songsArr})
    }
   // eslint-disable-next-line
  }, [])

  const togglePlaying = () => {
    if (!globalState.urls.length) return

    if (!currentPlaying && globalState.urls.length){
      const firstTrack = globalState.urls[0]
      setGlobalState({...globalState,  currentIndex: 0}) 
      setPlaying(true)
      setCurrentPlaying({name: firstTrack.name, link: firstTrack.link})
    }
 
    
    if (playing) {
      setPlaying(false);
      audioRef.current.pause();
      audioRef.current.load();
    } else {
      setPlaying(true);

      audioRef.current.play();
    }
  };

  useEffect(() => {
    if (currentPlaying && playing) {
      audioRef.current.play();
    }
   
  }, [currentPlaying, playing])

  // eslint-disable-next-line
  const {urls, userInput, playingUrl, currentIndex, trackName} = globalState;

  const { mediaAction, setMediaAction } = useState(null);

  const trackUrl = (e) => {
    const {value, name} = e.target
    console.log(value, name);
    
    setGlobalState({...globalState, [name]: value})
}

const deleteSong = (index) => {
  const songs = [...urls]
  const current = songs.find((e,i) => i === index)
  const newSongs = songs.filter((e, i) => i !== index)
  if (current && currentPlaying) {
    if (current.name === currentPlaying.name) {
     const result = window.confirm("Are you sure you want to delete this song")
     if (result) {
    
      setGlobalState({...globalState, urls: newSongs})
      setCurrentPlaying({name: "", link: ""})
      setPlaying(false)
     } else {
       return
     }
    } else {
     
      setGlobalState({...globalState, urls: newSongs})
    }
  } else {
  
    setGlobalState({...globalState, urls: newSongs})
  }
 
}

const handlePlay = (url, index, name) => {
 

  if (urls.length) {
    console.log("current", index);
    console.log("current song", urls[index]);
    setGlobalState({...globalState,  currentIndex: index}) 
    setPlaying(true)
    setCurrentPlaying({name, link: url})
  } else {
    return
  }
  
  

}

const handleNext = () => {
  if (urls.length) {
    let next = currentIndex + 1
    const song = urls[next]
    if (song) {
      setGlobalState({...globalState,  currentIndex: next}) 
      setCurrentPlaying({name: song.name, link: song.link})
      setPlaying(true)
    } else {
      next = 0
      setGlobalState({...globalState,  currentIndex: next}) 
      setCurrentPlaying({name: urls[next].name, link: urls[next].link})
      setPlaying(true)
    }
  } else {
    return
  }

 
}

const handlePrev = () => {
  if (urls.length) {
    let prev = currentIndex - 1
    const song = urls[prev]
    if (song) {
      setGlobalState({...globalState, currentIndex: prev}) 
      setCurrentPlaying({name: song.name, link: song.link})
      setPlaying(true)
    } else {
      prev = urls.length - 1
      setGlobalState({...globalState,  currentIndex: prev}) 
      setCurrentPlaying({name: urls[prev].name, link: urls[prev].link})
      setPlaying(true)
    }
  } else{
    return
  }

}



 const pushToArray =(e) =>{
    e.preventDefault();
    if(userInput==="" || trackName === ""){
        return;
    } else{  
        //localStorage.userPlaylist = JSON.stringify(urls);
        // window.localStorage.setItem('userPlaylist', JSON.stringify(urls));
        const newData = urls
        newData.push({name: trackName, link: userInput})
        localStorage.setItem("test", JSON.stringify(newData))
        setGlobalState({...globalState, userInput: "", urls: newData, trackName: ""})
        console.log(urls);
    }  
}
const handleButtonClick=(buttonId)=>{
  setMediaAction({...mediaAction, setMediaAction: buttonId})
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
      deleteSong={deleteSong}
      />
      <MediaDisplay trackUrl={trackUrl} action={mediaAction} audioRef={audioRef}  currentPlaying={currentPlaying} playing={playing}/> 
      <ButtonPanel 
      trackUrl={trackUrl} 
      handleButtonClick={handleButtonClick} 
      togglePlaying={togglePlaying} playing={playing} handleNext={handleNext} handlePrev={handlePrev} />
      
    </div>
  )
}

export default App

