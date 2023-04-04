import React from "react";
import "../assets/css/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { ReactComponent as Linkedin } from "../assets/icons/linkedin.svg";
import HeaderOption from "./HeaderOption";
import { useSelector } from "react-redux";
import { ReactComponent as Network } from "../assets/icons/network.svg";
import { ReactComponent as Jobsicon } from "../assets/icons/jobsicon.svg";
import { ReactComponent as Messageicon } from "../assets/icons/messageicon.svg";
import { ReactComponent as Notificationsicon } from "../assets/icons/notificationsicon.svg";
import { ReactComponent as Homeicon } from "../assets/icons/homeicon.svg";

function Header() {
  const user = useSelector((storeState) => storeState.userModule.user);
  return (
    <div className="header">
      <div className="header-content">
        <div className="header-left">
          <Linkedin className="header-left-icon" />
          <div className="header-search">
            <SearchIcon title="Home" className="header-left-icon" />
            <input placeholder="Search" type="text" />
          </div>
        </div>
        <div className="header-right">
          <HeaderOption title="Home" icon={<Homeicon />} />
          <HeaderOption title="My Network" icon={<Network />} />
          <HeaderOption title="Jobs" icon={<Jobsicon />} />
          <HeaderOption title="Messaging" icon={<Messageicon />} />
          <HeaderOption title="Notifications" icon={<Notificationsicon />} />
          <HeaderOption
            avatar={user?.photoURL || "/broken-image.jpg"}
            title="Me"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
