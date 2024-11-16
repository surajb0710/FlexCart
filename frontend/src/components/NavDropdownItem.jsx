import style from './NavDropdownItem.module.css';
import categoriesData from '../categoriesData.json';

// const menCategoriesList = categoriesData.Men;
const topwear = categoriesData.Men.Topwear;
const indianFestiveWear = categoriesData.Men.IndianFestiveWear;
const bottomwear = categoriesData.Men.Bottomwear;
const innerwearSleepwear = categoriesData.Men.InnerwearSleepwear;
const footwear = categoriesData.Men.Footwear;
const sportsActiveWear = categoriesData.Men.SportsActiveWear;
const gadgets = categoriesData.Men.Gadgets;
const fashionAccessories = categoriesData.Men.FashionAccessories;
const bagsBackpacks = categoriesData.Men.BagsBackpacks;
const luggagesTrolleys = categoriesData.Men.LuggagesTrolleys;
const personalCareGrooming = categoriesData.Men.PersonalCareGrooming;
const sunglassesFrames = categoriesData.Men.SunglassesFrames;
const watches = categoriesData.Men.Watches;

const NavDropdownItem = () => {
  console.log('footwear', footwear);
  return (
    <li className={style.navItem}>
      <a href="/" className={style.navbarLink}>
        Men
      </a>
      <div className={style.dropdownBlock}>
        <div className={style.col1}>
          <ul className={`${style.categorySection} ${style.topwear}`}>
            <li className={style.mainCategory}>
              <a href="/" className={style.mainCategoryLink}>
                {topwear.name}
              </a>
            </li>
            {topwear?.items?.map((category) => (
              <li className={style.subCategory} key={category.id}>
                <a href="/" className={style.subCategoryLink}>
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className={`${style.categorySection} ${style.indianFestiveWear}`}>
            <li className={style.mainCategory}>
              <a href="/" className={style.mainCategoryLink}>
                {indianFestiveWear.name}
              </a>
            </li>
            {indianFestiveWear?.items?.map((category) => (
              <li className={style.subCategory} key={category.id}>
                <a href="/" className={style.subCategoryLink}>
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={style.col2}>
          <ul className={`${style.categorySection} ${style.bottomwear}`}>
            <li className={style.mainCategory}>
              <a href="/" className={style.mainCategoryLink}>
                {bottomwear.name}
              </a>
            </li>
            {bottomwear?.items?.map((category) => (
              <li className={style.subCategory} key={category.id}>
                <a href="/" className={style.subCategoryLink}>
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
          <ul
            className={`${style.categorySection} ${style.innerwearSleepwear}`}
          >
            <li className={style.mainCategory}>
              <a href="/" className={style.mainCategoryLink}>
                {innerwearSleepwear.name}
              </a>
            </li>
            {innerwearSleepwear?.items?.map((category) => (
              <li className={style.subCategory} key={category.id}>
                <a href="/" className={style.subCategoryLink}>
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={style.col3}>
          <ul className={`${style.categorySection} ${style.footwear}`}>
            <li className={style.mainCategory}>
              <a href="/" className={style.mainCategoryLink}>
                {footwear.name}
              </a>
            </li>
            {footwear?.items?.map((category) => (
              <li className={style.subCategory} key={category.id}>
                <a href="/" className={style.subCategoryLink}>
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
          <ul
            className={`${style.categorySection} ${style.personalCareGrooming}`}
          >
            <li className={style.mainCategory}>
              <a href="/" className={style.mainCategoryLink}>
                {personalCareGrooming.name}
              </a>
            </li>
            {personalCareGrooming?.items?.map((category) => (
              <li className={style.subCategory} key={category.id}>
                <a href="/" className={style.subCategoryLink}>
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className={`${style.categorySection} ${style.sunglassesFrames}`}>
            <li className={style.mainCategory}>
              <a href="/" className={style.mainCategoryLink}>
                {sunglassesFrames.name}
              </a>
            </li>
            {sunglassesFrames?.items?.map((category) => (
              <li className={style.subCategory} key={category.id}>
                <a href="/" className={style.subCategoryLink}>
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className={`${style.categorySection} ${style.watches}`}>
            <li className={style.mainCategory}>
              <a href="/" className={style.mainCategoryLink}>
                {watches.name}
              </a>
            </li>
            {watches?.items?.map((category) => (
              <li className={style.subCategory} key={category.id}>
                <a href="/" className={style.subCategoryLink}>
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={style.col4}>
          <ul className={`${style.categorySection} ${style.sportsActiveWear}`}>
            <li className={style.mainCategory}>
              <a href="/" className={style.mainCategoryLink}>
                {sportsActiveWear.name}
              </a>
            </li>
            {sportsActiveWear?.items?.map((category) => (
              <li className={style.subCategory} key={category.id}>
                <a href="/" className={style.subCategoryLink}>
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className={`${style.categorySection} ${style.gadgets}`}>
            <li className={style.mainCategory}>
              <a href="/" className={style.mainCategoryLink}>
                {gadgets.name}
              </a>
            </li>
            {gadgets?.items?.map((category) => (
              <li className={style.subCategory} key={category.id}>
                <a href="/" className={style.subCategoryLink}>
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={style.col5}>
          <ul
            className={`${style.categorySection} ${style.fashionAccessories}`}
          >
            <li className={style.mainCategory}>
              <a href="/" className={style.mainCategoryLink}>
                {fashionAccessories.name}
              </a>
            </li>
            {fashionAccessories?.items?.map((category) => (
              <li className={style.subCategory} key={category.id}>
                <a href="/" className={style.subCategoryLink}>
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className={`${style.categorySection} ${style.bagsBackpacks}`}>
            <li className={style.mainCategory}>
              <a href="/" className={style.mainCategoryLink}>
                {bagsBackpacks.name}
              </a>
            </li>
            {bagsBackpacks?.items?.map((category) => (
              <li className={style.subCategory} key={category.id}>
                <a href="/" className={style.subCategoryLink}>
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
          <ul className={`${style.categorySection} ${style.luggagesTrolleys}`}>
            <li className={style.mainCategory}>
              <a href="/" className={style.mainCategoryLink}>
                {luggagesTrolleys.name}
              </a>
            </li>
            {luggagesTrolleys?.items?.map((category) => (
              <li className={style.subCategory} key={category.id}>
                <a href="/" className={style.subCategoryLink}>
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default NavDropdownItem;
