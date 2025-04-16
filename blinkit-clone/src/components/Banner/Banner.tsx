import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <img
        src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg"
        alt="banner"
        className={styles.banner}
      />
    </div>
  );
};

export default Banner;
