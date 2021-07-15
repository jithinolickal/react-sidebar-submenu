import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./sidesubmenu.css";

const Sidesubmenu = ({ item })=> {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
    <Link to={item.path}>
      <div
        className="SidebarLink"
        onClick={item.subNav && showSubnav}
      >
        <div style={{display:"flex"}}>
          {item.icon}
          <div style={{ marginLeft: "16px" }}>{item.title}</div>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </div>
      </Link>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <Link to={item.path} >
            <div className="DropdownLink" key={index}>
              {item.icon}
              <div style={{ marginLeft: "16px" }}>{item.title}</div>
            </div>
              </Link>
          );
        })}
    </>
  );
}

export default Sidesubmenu;
