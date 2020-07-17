import React from 'react';
import MediaArray from './components/MediaArray';
import MediaDisplay from './components/MediaDisplay';
import './App.css'
import ButtonModal from './components/ButtonModal';


function App() {
  return (
    <div className="wrapper">
      <MediaArray />
      <MediaDisplay />
      <ButtonModal />
    </div>
  )
}

export default App

