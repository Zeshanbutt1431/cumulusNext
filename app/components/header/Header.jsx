"use client"
import ScrollTop from "../home/ScrollTop";
import Logo from "./Logo";
import Notification from "./Notification";
import HeaderInfo from "./HeaderInfo";
import HeaderSearch from "./HeaderSearch";
import HeaderCartIcon from "./HeaderCartIcon";
import Navbar from "./Navbar";
const Header = (props) => {
  return (
    <>
      <Navbar taxonomy={props.taxonomy} />
      <div className="header-container row">
        <Logo />
        <HeaderInfo />
        <Notification />
        <HeaderSearch />
        <HeaderCartIcon />
      </div>
        <ScrollTop /> 
    </>
  );
};

export default Header;
