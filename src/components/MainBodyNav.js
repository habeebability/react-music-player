import React from 'react';
import './MainBodyNav.css';
import { IconContext } from 'react-icons';
import { FaRegPlayCircle } from 'react-icons/fa';
import { BiShuffle, BiListUl } from 'react-icons/bi';
import { BsFillGridFill } from 'react-icons/bs';

function MainBodyNav() {
  return (
    <IconContext.Provider value={{color: "green", }} >
      <div className="main-body-nav">
        <div className="songs-div">
          <h1>Songs</h1>
          <FaRegPlayCircle className="mainBodyNavIcon" />
          <BiShuffle className="mainBodyNavIcon" />
        </div>
        <div className="icons-grid">
          <BsFillGridFill className="mainBodyNavIcon" />
          <BiListUl className="mainBodyNavIcon" />
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default MainBodyNav;
