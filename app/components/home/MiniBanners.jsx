import Link from 'next/link';
import Button from "./Button";
import Image from "next/image";

const MiniBanners = () => {
  return (
    <div className="row minibanners">
      <div className="col-lg-4 col-md-6 col-sm-6 minibanner p-0 m-0">
        <Image
          width={441}
          height={360}
          src="/assets/images/minibanners/mb1.webp"
          alt="slider"
        />

        <div className="mb-overlay">
          <div className="mb-content">
            <h2>PISTOLS</h2>
            <Link className="link" href="/">
              <Button title="Shop now">Shop now</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 minibanner p-0 m-0">
        <Image
          width={441}
          height={360}
          src="/assets/images/minibanners/mb2.webp"
          alt="slider"
        />
        <div className="mb-overlay">
          <div className="mb-content">
            <h2>RIFLES</h2>
            <Link className="link" href="/">
              <Button title="Shop now">Shop now</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 minibanner p-0 m-0">
        <Image
          width={441}
          height={360}
          src="/assets/images/minibanners/mb3.webp"
          alt="slider"
        />
        <div className="mb-overlay">
          <div className="mb-content">
            <h2>AMMUNITION</h2>
            <Link className="link" href="/">
              <Button title="Shop now">Shop now</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 minibanner p-0 m-0">
        <Image
          width={441}
          height={360}
          src="/assets/images/minibanners/mb4.webp"
          alt="slider"
        />
        <div className="mb-overlay">
          <div className="mb-content">
            <h2>BAGS & VESTS</h2>
            <Link className="link" href="/">
              <Button title="Shop now">Shop now</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 minibanner p-0 m-0">
        <Image
          width={441}
          height={360}
          src="/assets/images/minibanners/mb5.webp"
          alt="slider"
        />
        <div className="mb-overlay">
          <div className="mb-content">
            <h2>SCOPES</h2>
            <Link className="link" href="/">
              <Button title="Shop now">Shop now</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6 minibanner p-0 m-0">
        <Image
          width={441}
          height={360}
          src="/assets/images/minibanners/mb6.webp"
          alt="slider"
        />
        <div className="mb-overlay">
          <div className="mb-content">
            <h2>RANGE & CLASSES</h2>
            <Link className="link" href="/">
              <Button title="Shop now">Shop now</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniBanners;
