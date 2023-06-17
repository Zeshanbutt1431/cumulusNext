import Image from "next/image"

const Deals = () => {
    return (
        <div className="deals-container">
            <div className='deals row'>
                <div className="col-md-12 banner">
                    <div className="banner-image">
                        <Image src="/assets/images/deals/d1.webp" alt="deal" width={520} height={390} loading="lazy" />
                        <div className="deal-overlay"></div>
                    </div>
                    <div className="banner-content">
                        <Image src="/assets/images/deals/ss.png" alt="deal-logo" width={122} height={27} loading="lazy"/>
                        <h1>AVAILABLE ONLINE UP TO 43% OFF</h1>
                    </div>
                </div>
                <div className="col-md-12 banner2">
                    <div className="banner-image">
                        <Image src="/assets/images/deals/d2.webp" alt="deal" width={740} height={390} loading="lazy" />
                        <div className="deal-overlay"></div>
                    </div>
                    <div className="banner-content">
                        <Image src="/assets/images/deals/vo.png" alt="deal-logo" width={250} height={28} loading="lazy"/>
                        <h1>AVAILABLE ONLINE UP TO 43% OFF</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Deals