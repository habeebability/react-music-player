import React from 'react';
import './SideNavOption.css';

function SideNavOption({active, Icon, title}) {

    return (
        <div className={`side-nav-option ${active && 'side-nav-option--active'}`}>
            <Icon />
           <h2 className='side-nav-option-title'>{title}</h2>
        </div>
    )
}

export default SideNavOption
