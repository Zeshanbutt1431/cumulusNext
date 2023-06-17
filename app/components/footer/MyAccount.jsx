import React from 'react'
import Link from 'next/link';
const MyAccount = () => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6information mt-3">
      <h5 className="heading">MY ACCOUNT</h5>
      <div className="footer-menu">
        <Link href="/" className="link">
          <span>Sign In</span>
        </Link>
        <Link href="/" className="link">
          <span>View Cart</span>
        </Link>
        <Link href="/" className="link">
          <span>My Wishlist</span>
        </Link>
        <Link href="/" className="link">
          <span>FAQS</span>
        </Link>
      </div>
    </div>
  );
}

export default MyAccount