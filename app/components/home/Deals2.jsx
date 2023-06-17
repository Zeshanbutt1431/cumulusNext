import Image from "next/image";
import Button from "./Button";
const Deals = () => {
  return (
    <div className="deals-container">
      <div className="row deals2">
        <div className="col-md-12 banner2">
          <div className="banner-image">
            <Image src="/assets/images/deals/d3.webp" alt="deal" width={743} height={390} loading="lazy" />
            <div className="deal-overlay"></div>
          </div>
          <div className="banner-content2">
            <h1>BEST DEALS ON HUNTING GEARS</h1>
            <Button>Learn more</Button>
          </div>
        </div>
        <div className="col-md-12 banner2">
          <div className="banner-image">
            <Image src="/assets/images/deals/d4.webp" alt="deal" width={519} height={390} loading="lazy" />
            <div className="deal-overlay"></div>
          </div>
          <div className="banner-content2">
            <h1>30% DISCOUNT ON GUNSMITHING</h1>
            <Button>Learn more</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
