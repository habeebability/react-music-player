import React from 'react';
import './MainBodyNav.css';
import { IconContext } from 'react-icons';
import { FaRegPlayCircle } from 'react-icons/fa';
import { BiShuffle, BiListUl } from 'react-icons/bi';
import { BsFillGridFill } from 'react-icons/bs';

function MainBodyNav() {
  return (
    <IconContext.Provider value={{color: "white"  }} >
      <div className="main-body-nav">
        <div className="songs-div">
          <h1 className='text-2xl'>Songs</h1>
          <FaRegPlayCircle className="mainBodyNavIcon mx-2" style={{backgroundColor: '#38A1FD', borderRadius: '25px'}} />
          <BiShuffle className="mainBodyNavIcon mx-2" />
        </div>
        <div className="icons-grid">
          <BsFillGridFill className="mainBodyNavIcon mx-2" />
          <BiListUl className="mainBodyNavIcon mx-2" />
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default MainBodyNav;
