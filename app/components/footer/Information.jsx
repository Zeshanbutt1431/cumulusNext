import React from 'react'
import Link from 'next/link';
const Information = () => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6 information mt-3">
      <h5 className="heading">INFORMATION</h5>
      <div className="footer-menu">
        <Link href="/" className="link">
          <span>Template Settings</span>
        </Link>
        <Link href="/" className="link">
          <span>Search Terms</span>
        </Link>
        <Link href="/" className="link">
          <span>Privacy Policy</span>
        </Link>
        <Link href="/" className="link">
          <span>About Us</span>
        </Link>
        <Link href="/" className="link">
          <span>Advandaced Search</span>
        </Link>
        <Link href="/" className="link">
          <span>Orders And Returns</span>
        </Link>
        <Link href="/" className="link">
          <span>Contact Us</span>
        </Link>
        <Link href="/" className="link">
          <span>Customer Services</span>
        </Link>
      </div>
    </div>
  );
}

export default Information