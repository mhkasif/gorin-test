import Image from "next/image";
import styles from "./page.module.css";
import bg from "./assets/hero-bg.png";
import purpleBG from "./assets/purple-bg.png";
import heroImage from "./assets/hero-image.png";
import playButton from "./assets/play-btn.png";
import RetailIcon from "./assets/Retail.png";
import image1 from "./assets/1.png";
import image2 from "./assets/2.png";
import image3 from "./assets/3.png";

const propertyTypes = [
  {
    title: "Retail",
    img: RetailIcon,
  },
  {
    title: "Multi-Family",
    img: RetailIcon,
  },
  {
    title: "Office",
    img: RetailIcon,
  },
  {
    title: "Industrial",
    img: RetailIcon,
  },
  {
    title: "Hotel",
    img: RetailIcon,
  },
  {
    title: "Land",
    img: RetailIcon,
  },
];
const cards = [
  {
    img: image1,
    title: "Retail OM",
    text: "strip centers, street retail, vehicle related, and more.",
    filled: true,
  },
  {
    img: image2,
    title: "Multi-Family OM",
    text: "garden, low-rise, mid-rise, high-rise.",
    filled: false,
  },
  {
    img: image3,
    title: "Office OM",
    text: "all classes of office buildings, loft/creative, medical.",
    filled: false,
  },
];
export default function Home() {
  return (
    <div className="homepage">
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Image src={"/logo.png"} width={131} height={29} alt="logo" />
        </div>
        <div className={styles.menu}>
          <div className="menu-item">Features</div>
          <div className="menu-item">Pricing</div>
          <div className="menu-item">
            <Image
              style={{ marginRight: 4 }}
              src={"/lock.png"}
              width={14}
              height={14}
              alt="login"
            />
            Login
          </div>
          <button className={styles.button}>Try For Free</button>
        </div>
      </nav>
      <section
        className={styles["hero-section"]}
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className={styles["text-section"]}>
          <div className={styles["text-section-heading"]}>
            <b>Sell CRE Faster </b>with <br />
            OMs & Ads created <br />
            in <b>minutes</b>
          </div>
          <p>
            Create beautiful Commercial Real Estate Offering Memorandums, Flyers
            & Ads in minutes with our AI powered platform
          </p>
          <div className="flex align-center">
            <button className={styles.button}>Try for free &rarr;</button>
            <div className="text-muted flex align-center ml-3">
              <Image src={playButton.src} width={40} height={40} alt="play " />{" "}
              <span className="ml-2">Watch Demo</span>
            </div>
          </div>
        </div>
        <div className="image-section">
          <Image src={heroImage.src} height={455} width={528} alt="hero" />
        </div>
      </section>
      <section className={styles.section2}>
        <p className="text-center text-purple">Create OMs and Ads For</p>

        <h2 className="text-center">Various Real Estate Property Types</h2>
        <div className={styles.propertyTypesList}>
          {propertyTypes.slice(0, 3).map((x) => (
            <PropertyTypes key={x.title} {...x} />
          ))}
        </div>
        <div className={styles.propertyTypesList}>
          {propertyTypes.slice(3).map((x) => (
            <PropertyTypes key={x.title} {...x} />
          ))}
        </div>
      </section>
      <section
        className={styles.section3}
        style={{ backgroundImage: `url(${purpleBG.src})` }}
      >
        <div className={styles["card-container"]}>
          <h1 className="text-center mb-4">
            Sample OMs created with our platform
          </h1>
          <div className={styles["card-item-container"]}>
            {cards.map((x) => (
              <CardItem key={x.title} {...x} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
const PropertyTypes = ({ title, img }) => {
  return (
    <div className={styles.propertyItem}>
      <Image src={img.src} width={48} height={48} alt={title} />
      <div className="mt-2">{title}</div>
    </div>
  );
};
const CardItem = ({ img, title, text, filled }) => (
  <div className={styles.cardItem}>
    <img height={275} src={img.src} alt={title} style={{borderBottom:"1px dashed #B2B2B2"}} />
    <div className={styles.cardItemBody}>
      <h3 className="m0">{title}</h3>
      <div className="text-muted">{text}</div>
      <button className={filled ? styles.button : styles.buttonUnfilled}>
        View Sample Template
      </button>
    </div>
  </div>
);
