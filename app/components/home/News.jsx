import Image from "next/image";
import Button from "./Button";
const News = () => {
  return (
    <div className="news">
      <h4 className="news-heading">LATEST NEWS</h4>
      <div className="row news-card-container">
        <div className="col-md-12 col-lg-4 col-md-12 col-lg-4 news-card p-4">
          <div className="news-image-container">
            <Image src="/assets/images/news/n1.webp" alt="news" className="news-image" width={413} height={69} loading="lazy"/>
            <div className="news-overlay"></div>
          </div>
          <div className="headline">
            <h1>BLOG FULL HEADING GOES HERE 1</h1>
          </div>
          <p className="news-detail">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore...
          </p>
          <span className="news-date">MARCH 09, 2023</span>
        </div>
        <div lg={4} md={12} className="col-md-12 col-lg-4 news-card p-4">
          <div className="news-image-container">
            <Image
              src="/assets/images/news/n2.webp"
              alt="news"
              className="news-image"
              width={413} height={69} loading="lazy"
            />
            <div className="news-overlay"></div>
          </div>
          <div className="headline">
            <h1>BLOG FULL HEADING GOES HERE 2</h1>
          </div>
          <p className="news-detail">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore...
          </p>
          <span className="news-date">MARCH 09, 2023</span>
        </div>
        <div lg={4} md={12} className="col-md-12 col-lg-4 news-card p-4">
          <div className="news-image-container">
            <Image
              src="/assets/images/news/n3.webp"
              alt="news"
              className="news-image"
              width={413} height={69} loading="lazy"
            />
            <div className="news-overlay"></div>
          </div>
          <div className="headline">
            <h1>BLOG FULL HEADING GOES HERE 3</h1>
          </div>
          <p className="news-detail">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore...
          </p>
          <span className="news-date">MARCH 09, 2023</span>
        </div>
      </div>

      <div className="news-show-more">
        <Button>Show More</Button>
      </div>
    </div>
  );
};

export default News;
