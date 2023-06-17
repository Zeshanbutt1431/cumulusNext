import Image from 'next/image'

const Services = () => {
  return (
    <div className="services-container">
      <div className="row services">
        <>
          <div className="col-sm-12 col-md-6 col-lg-3  service-container logo-img">
            <Image
              src="assets/images/logo.svg" width={222} height={72} alt="logo" />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 service-container">
            <i className="fa-solid fa-phone-volume service-icon"></i>
            <span className="service-info">+(123) 456 789</span>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 service-container">
            <i className="fa-solid fa-arrow-rotate-left service-icon"></i>
            <span className="service-info">HUSTLE FREE RETURNS</span>{" "}
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 service-container">
            <i className="fa-solid fa-truck-fast service-icon"></i>
            <span className="service-info">LOW SHIPPING RATES</span>
          </div>
        </>
      </div>
    </div>
  );
};

export default Services;
