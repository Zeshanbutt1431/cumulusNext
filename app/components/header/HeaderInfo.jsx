import React, { useState } from "react";

const HeaderInfo = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="col-lg-1 col-md-1 col-sm-1 col-2">
   
      {open ? (
        <i
          className="fa-sharp fa-solid fa-circle-chevron-up arrowdown"
          onClick={() => setOpen(!open)}
        ></i>
      ) : (
        <i
          className="fa-solid fa-circle-chevron-down arrowdown"
          onClick={() => setOpen(!open)}
        ></i>
      )}

      {open && (
        <div className="header-info">
          <div className="row info-container">
            <>
              <div className="col-lg-3 col-md-12 info">
                <i className="fa-solid fa-clock info-icon"></i>
                <span>Working Hours: Mon - Fri: 9am to 6pm</span>
              </div>
              <div className="col-lg-3 col-md-12 info">
                <i className="fa-sharp fa-solid fa-building info-icon"></i>
                <span>Celerant Solutions</span>
              </div>
              <div className="col-lg-3 col-md-12 info">
                <i className="fa-sharp fa-solid fa-phone-volume info-icon"></i>
                <span>+ (123) 456 678</span>
              </div>
              <div className="col-lg-3 col-md-12 info">
                <i className="fa-solid fa-envelope info-icon"></i>
                <span>info@firearmsshop.com</span>
              </div>
            </>
          </div>
        </div>
        )}
        </div>
    
  );
};

export default HeaderInfo;
