import React from "react";
import { playAudio } from "../util";
import Button from "@material-ui/core/Button"
import {Link} from "react-router-dom";


const LibrarySong = ({
  name,
  artist,
  cover,
  id,
  comment,
  setCurrentSong,
  songs,
  audioRef,
  isPlaying,
  setSongs,
  active,
}) => {
  const songSelectHandler = () => {
    const selectedSong = songs.filter((state) => state.id === id);
    setCurrentSong({ ...selectedSong[0] });
    //Set Active in library
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);

    //Play audio
    playAudio(isPlaying, audioRef);
  };
  return (
    <div className = "header">
    {/* <Link to="/infobirds">About</Link> */}
    <div
      onClick={songSelectHandler}
      className={`library-song ${active ? "selected" : ""}`}
    >
      <img src={cover} alt="" />
      
      <div className="song-description">
        
        <h3><Link to="/info">{name}</Link></h3>
        {/* <Button Link to="/infobirds">About</Button> */}
        <h3>{id}</h3>
        <h3>{comment}</h3>
        <h4>{artist}</h4>
        
      </div>
    </div>
    </div>
  );
};

export default LibrarySong;
