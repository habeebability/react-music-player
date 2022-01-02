import React from 'react';
import MainBodyNav from './MainBodyNav';
import SongList from './SongList';
import './MainBody.css';

function MainBody() {
    return (
        <div className='main-body'>
            <MainBodyNav/>
            <SongList/>

            
            
        </div>
    )
}

export default MainBody
