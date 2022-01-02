import React from 'react';
import './SideNav.css';
import SideNavOption from './SideNavOption';

import {FaMusic} from 'react-icons/fa'
import {FaMicrophone} from 'react-icons/fa';
import { FaClipboardList } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa';
import { BsFillMusicPlayerFill } from 'react-icons/bs'



function SideNav() {
    return (
        <div className='SideNav-container'>
            <h2 className='side-nav-title'>Library</h2>
            {/* <h3><FaMusic/> Songs</h3> */}
            <SideNavOption active Icon={FaMusic} title="Songs"/>
            <SideNavOption Icon={FaClipboardList} title="Album"/>
            <SideNavOption Icon={FaMicrophone} title="Artist"/>
            <SideNavOption Icon={FaClock} title="Recently Played"/>


            <h2 className='side-nav-title'>Playlist</h2>
            <SideNavOption Icon={BsFillMusicPlayerFill} title="Playlist 1"/>
            <SideNavOption Icon={BsFillMusicPlayerFill} title="Playlist 2"/>
            <SideNavOption Icon={BsFillMusicPlayerFill} title="Playlist 3"/>
            <SideNavOption Icon={BsFillMusicPlayerFill} title="Playlist 4"/>

           



            
        </div>
    )
}

export default SideNav
