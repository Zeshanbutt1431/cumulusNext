import React from 'react'
import Link from 'next/link';
const WhyBuy = () => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6 information mt-3">
      <h5 className="heading">WHY BUY FROM US</h5>
      <div className="footer-menu">
        <Link href="/" className="link">
          <span>Shipping and Delivery</span>
        </Link>
        <Link href="/" className="link">
          <span>Secure Payments</span>
        </Link>
        <Link href="/" className="link">
          <span>Support</span>
        </Link>
        <Link href="/" className="link">
          <span>Gurantee</span>
        </Link>
        <Link href="/" className="link">
          <span>Terms and Conditions</span>
        </Link>
      </div>
    </div>
  );
}

export default WhyBuy