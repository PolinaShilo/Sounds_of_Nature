import React, {Component, useState, useRef, useNavigate, useData, useForm, handleClick} from "react";
import {  Routes, Route, Link } from "react-router-dom";
import "./styles/app.scss";
import Player from "./components/Player";
import FullPlayer from "./components/FullPlayer";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
import FileInput from "./components/FileInput";
import NameForm from "./components/NameForm";
import Comments from "./components/Comments";
import Users from "./components/Users";
import chillhop from "./data";
import data from "./data";
import { playAudio } from "./util";
import Button from "@material-ui/core/Button";
import { Breadcrumbs } from "@material-ui/core";

import Typography from "@material-ui/core/Typography";
import InfoBirds from "./components/InfoBirds";
import LibrarySong from "./components/LibrarySong";


function App() {
  
  const audioRef = useRef(null);

  const [songs, setSongs] = useState(chillhop());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
    volume: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [infoStatus, setInfoStatus] = useState(true);

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;

    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const percentage = Math.round((roundedCurrent / roundedDuration) * 100);
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration: duration,
      animationPercentage: percentage,
      volume: e.target.volume,
    });
  };
  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    playAudio(isPlaying, audioRef);
    return;
  };



   
  return (
    <header>
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      
      
      
      
        
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
    <div className="header">
      <Link to="/">Home</Link>&nbsp;
      <Link to="/info">Info</Link>&nbsp;
      <Link to="/comments">Comments</Link>
      </div>
       <Routes>
          <Route path = "/" element={<LibrarySong/>}/>
          <Route path = "/info" element={<InfoBirds />}/>
          <Route path = "/comments" element={<Comments/>}/>
        </Routes>
       
       
    
      
      <Song isPlaying={isPlaying} currentSong={currentSong} />
      {/* <Button>About</Button> */}
      
      
      
      <Player
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        isPlaying={isPlaying}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
      />
      
      
        




        
       
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}
       
      ></audio> 
   
       </div>
   
       </header>
   

      );

 

  }  

  


export default App;
