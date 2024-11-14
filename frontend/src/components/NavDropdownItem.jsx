import style from './NavDropdownItem.module.css';
import data from '../../data.json';

const genres = data.genres;

const NavDropdownItem = () => {
  return (
    <li className={style.navItem}>
      <a href="/" className={style.navbarLink}>
        Genre
      </a>
      <ul className={style.dropdownMenu}>
        {genres.map((genre) => (
          <li className={style.dropdownItem} key={genre.id}>
            <a href="/" className={style.dropDownItemLink}>
              {genre.name}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default NavDropdownItem;
