import {AiOutlineArrowRight} from 'react-icons/ai'

const Newsletter = () => {
  return (
    <div className=" col-lg-3 col-md-6 col-sm-6 information footer-newsletter mt-3">
      <h5 className="heading">SIGN UP FOR OUR NEWSLETTER</h5>
      <p>
        Stay up-to-date with our latest promotions, discounts, sales, and
        special offers.
      </p>
      <div className="newsletter">
        <input type="text" aria-label="News-letter" placeholder='Email'/>
        <button title="Newsletter">
          <AiOutlineArrowRight className="newsletter-icon"/>
        </button>
      </div>
    </div>
  );
}

export default Newsletter