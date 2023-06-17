import React from 'react'
import Button from '../home/Button'

const SingleProduct = () => {
  return (
    <div className='SingleProduct'>
        <div className="prod-image">
            <img src="/assets/images/featured/product.png" alt="gun" width={300} height={300} />
        </div>
        <div className="prod-detail">
        <p className="prod-brand">BURRis</p>
        <p className="name">BURRIS FASTFIRE MNT FOR GLK BER PX | 000381103192</p>
        <p className="stock">In Stock Vendor</p>
        <p className="price">$ 49.90</p>
        </div>
        <Button>View Details</Button>
    </div>
  )
}

export default SingleProduct 