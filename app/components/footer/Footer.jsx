"use client"
import Link from 'next/link';
import Information from "./Information";
import WhyBuy from "./WhyBuy";
import MyAccount from "./MyAccount";
import Newsletter from "./Newsletter";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="row footer">
        <Information/>
        <WhyBuy/>
       <MyAccount/>
        <Newsletter/>
      </div>
    </div>
  );
};

export default Footer;
