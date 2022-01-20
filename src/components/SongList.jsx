import React, {useState} from "react";
import SongGrid from '../components/SongGrid'
import NoBeMe from '../assets/NoBeMe.mp3';
import Mama from '../assets/Mama.mp3';
import Heya from '../assets/Heya.mp3';
import avatar from '../assets/avatar.png';
import Track from "./Track";
import './SongList.css';

const songs = [
  {
    title: 'NoBeMe',
    artist: 'Brymo',
    audioSrc: NoBeMe,
    // image: imgSrc,
    color: '#00aeb0',
    album: 'Mama',
    genre: 'afro',
    year: '1884',
    image: avatar
  },
  {
    title: 'Mama',
    artist: 'Brymo',
    audioSrc: Mama,
    // image: imgSrc2,
    color: '#ffb77a',
    album: 'Mama',
    genre: 'afro',
    year: '2004',
    image: avatar
  },
  {
    title: 'Heya!',
    artist: 'Brymo',
    audioSrc: Heya,
    // image: imgSrc3,
    color: '#5f9fff',
    album: 'Mama',
    genre: 'afro',
    year: '2024',
    image: avatar
  },
];
const checkPlaying = (playing, aud, val)=>{
  if(playing === true){
    aud.remove(val);
  }
  else {
    aud.add(val)
  }
}


function SongList() {

  const [playing, setPlaying] = useState(false);
  
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden  sm:rounded-lg">
            <table className="min-w-full border-collapse ">
              <thead className="bg-black-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Song
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Album
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Genre
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Year
                  </th>
                 
                  
                </tr>
              </thead>
              <tbody className="bg-black divide-y divide-gray-200 ">
                {songs.map((song) => (
                  <tr key={song.title} className="hover:bg-gray-300 cursor-pointer"
                  onClick={
                    ()=>{
                      let aud;
                      if(playing){
                        setPlaying(true)
                      }
                      else {
                        aud = document.createElement('audio');
                      aud.setAttribute('src', song.audioSrc)
                      aud.setAttribute('controls', 'controls')
                      aud.setAttribute('autoplay', 'autoplay')
                      document.body.appendChild(aud);

                      }
                      

                    }
                  }
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full cursor-pointer" src={song.image} alt="" onClick={
                            ()=>{
                              let aud = document.createElement('audio');
                              aud.setAttribute('src', song.audioSrc)
                              aud.setAttribute('controls', 'controls')
                              aud.setAttribute('autoplay', 'autoplay')
                              document.body.appendChild(aud);

                            }
                          }/>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-white">{song.title}</div>
                          <div className="text-sm text-white">{song.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-white">{song.album}</div>
                      {/* <div className="text-sm text-gray-500">{person.department}</div> */}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs text-white leading-5 font-semibold ">
                        Afro
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-white">{song.year}</div>
                      {/* <div className="text-sm text-gray-500">{person.department}</div> */}
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
            {/* <SongGrid/> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SongList;
