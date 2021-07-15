import React from 'react'

import { SidebarData } from '../SidebarData';
import Sidesubmenu from '../sidesubmenu/sidesubmenu';

import './Sidenavbar.css'

function Sidenavbar() {
    return (
        <div className="SidebarNav">
            <div style={{width: "100%"}}>
            {SidebarData.map((item, index) => {
              return <Sidesubmenu item={item} key={index} />;
            })}
            </div>
        </div>
    )
}

export default Sidenavbar
