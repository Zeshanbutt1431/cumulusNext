import React, { useState } from 'react';
import {FaShoppingCart} from 'react-icons/fa'
import {BsFillPersonFill} from 'react-icons/bs'

import Cart from './Cart';
const HeaderCartIcon = () => {
    const [showCart, setShowCart] = useState(false);
  return (
    
          <div className=" col-lg-1 col-md-3 col-sm-3 col-4 header-actions p-0">
                <div className="cart" onClick={() => setShowCart(!showCart)}>
                  <div className="cart-icon-container">
                    {showCart ? (
                     <span className='cart-icon'>X</span>
                    ) : (
                     < FaShoppingCart className="cart-icon"/>
                    )}
                  </div>
                  <div className="cart-count">0</div>
                  {showCart && <Cart />}
                </div>
                <div className="account">
                  <BsFillPersonFill className="account-icon"/>
                </div>
              </div>
  );
}

export default HeaderCartIcon