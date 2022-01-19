import React, { useState, useEffect } from 'react';
import NoBeMe from '../assets/NoBeMe.mp3';
import Mama from '../assets/Mama.mp3';
import Heya from '../assets/Heya.mp3';
import './SongList.css';

function SongList() {
  const songs = [
    {
      title: 'NoBeMe',
      artist: 'Brymo',
      audioSrc: NoBeMe,
      // image: imgSrc,
      color: '#00aeb0',
    },
    {
      title: 'Mama',
      artist: 'Brymo',
      audioSrc: Mama,
      // image: imgSrc2,
      color: '#ffb77a',
    },
    {
      title: 'Heya!',
      artist: 'Brymo',
      audioSrc: Heya,
      // image: imgSrc3,
      color: '#5f9fff',
    },
  ];

  const SongData = ()=> {
      const [song, setSong] = useState([]);
      const getSongs =()=>{
          setSong(song)
      }

      useEffect(()=>{
          getSongs()
      }, [])
  }

  return <div>
      <ul className='song-grid'>
          {
              songs.map((song)=>{
                 const {artist, audioSrc, title} = songs; 
                 return <li key={song.title}>
                     <h4>title: {song.title}</h4>
                     <h4>artist {song.artist}</h4>
                     <audio src={song.audioSrc} controls></audio>

                 </li>
              })

          }

      </ul>


  </div>;
}

export default SongList;
