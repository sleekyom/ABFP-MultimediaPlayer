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
      
      
      <ButtonModal><i class="fa fa-play"></i></ButtonModal>
      <ButtonModal><i class="fa fa-stop"></i></ButtonModal>
      <ButtonModal><i class="fa fa-pause"></i></ButtonModal>
      <ButtonModal><i class="fa fa-forward"></i></ButtonModal>
      <ButtonModal><i class="fa fa-rewind"></i></ButtonModal>
    </div>
  )
}

export default App

