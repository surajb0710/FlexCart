import style from './NavDropdownItem.module.css';
import categoriesData from '../categoriesData.json';

// const menCategoriesList = categoriesData.Men;
const topwear = categoriesData.Men.Topwear;
const bottomwear = categoriesData.Men.Bottomwear;
const footwear = categoriesData.Men.Footwear;
const gadgets = categoriesData.Men.Gadgets;

const NavDropdownItem = () => {
  return (
    <li className={style.navItem}>
      <a href="/" className={style.navbarLink}>
        Men
      </a>
      <ul className={style.dropdownMenu}>
        <li className={style.dropdownItem}>
          <a href="/" className={style.dropDownItemLink}>
            Topwear
          </a>
        </li>
        <ul className={style.dropdownMenu}>
          {topwear.map((category) => (
            <li className={style.dropdownItem} key={category.id}>
              <a href="/" className={style.dropDownItemLink}>
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </ul>
      <ul className={style.dropdownMenu}>
        <li className={style.dropdownItem}>
          <a href="/" className={style.dropDownItemLink}>
            Bottomwear
          </a>
        </li>
        <ul className={style.dropdownMenu}>
          {bottomwear.map((category) => (
            <li className={style.dropdownItem} key={category.id}>
              <a href="/" className={style.dropDownItemLink}>
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </ul>
      <ul className={style.dropdownMenu}>
        <li className={style.dropdownItem}>
          <a href="/" className={style.dropDownItemLink}>
            Footwear
          </a>
        </li>
        <ul className={style.dropdownMenu}>
          {footwear.map((category) => (
            <li className={style.dropdownItem} key={category.id}>
              <a href="/" className={style.dropDownItemLink}>
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </ul>
      <ul className={style.dropdownMenu}>
        <li className={style.dropdownItem}>
          <a href="/" className={style.dropDownItemLink}>
            Gadgets
          </a>
        </li>
        <ul className={style.dropdownMenu}>
          {gadgets.map((category) => (
            <li className={style.dropdownItem} key={category.id}>
              <a href="/" className={style.dropDownItemLink}>
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </li>
  );
};

export default NavDropdownItem;
