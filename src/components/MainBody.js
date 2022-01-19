import React from 'react';
import MainBodyNav from './MainBodyNav';
import './MainBody.css';
import SongList from './SongList';

function MainBody() {
    return (
        <div className='main-body'>
            <MainBodyNav/>
            <SongList/>

            
            
        </div>
    )
}

export default MainBody
