import styles from './Footer.module.css';

function Footer() {
  return (
    <nav className={styles.footerNavbar}>
      <div className={styles.footerLogo}>FilmNest</div>
      <div>
        <a href="/" className={styles.footerLink}>
          Terms of Service
        </a>
        <a href="/" className={styles.footerLink}>
          Privacy Policy
        </a>
        <a href="/" className={styles.footerLink}>
          About Us
        </a>
        <a href="/" className={styles.footerLink}>
          Contact Us
        </a>
        <a href="/" className={styles.footerLink}>
          Site Map
        </a>
        <a href="/" className={styles.footerLink}>
          FAQ
        </a>
      </div>
    </nav>
  );
}

export default Footer;
