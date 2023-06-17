import React from 'react'
import Image from 'next/image'

const Logo = () => {

  return (

    <div className="col-lg-3 col-md-3 col-sm-3 col-10 logo">
      <Image
        src="assets/images/logo.svg" width={222} height={72} alt="logo" />

    </div>


  )
}

export default Logo