import styles from './Navbar.module.css';
import { IoSearchSharp } from 'react-icons/io5';
import { FaRegCircleUser } from 'react-icons/fa6';
import { FaRegHeart } from 'react-icons/fa';
import { IoCartSharp } from 'react-icons/io5';
import NavDropdownItem from './NavDropdownItem';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>FilmNest</div>
      <ul className={styles.linksNavbar}>
        <NavDropdownItem />
        <li className={styles.navItem}>
          <a href="/" className={styles.navbarLink}>
            Men
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/" className={styles.navbarLink}>
            Women
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/" className={styles.navbarLink}>
            Kids
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/" className={styles.navbarLink}>
            Home & Living
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/" className={styles.navbarLink}>
            Beauty
          </a>
        </li>
      </ul>
      <div className={styles.navbarSearchContainer}>
        <IoSearchSharp className={styles.searchIcon} />
        <input
          type="text"
          className={styles.navbarSearch}
          placeholder="Search for products"
        />
      </div>
      <div>
        <FaRegCircleUser />
        <p>Profile</p>
      </div>
      <div>
        <FaRegHeart />
        <p>WishList</p>
      </div>
      <div>
        <IoCartSharp />
        <p>Cart</p>
      </div>
    </nav>
  );
};

export default Navbar;
