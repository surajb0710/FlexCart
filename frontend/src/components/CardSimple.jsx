import styles from './CardSimple.module.css';
import PropTypes from 'prop-types';

const CardSimple = ({ product }) => {
  return (
    <div className={styles.card}>
      <img
        src="https://plus.unsplash.com/premium_vector-1727453963634-62730d7c6f8c"
        alt=""
        className={styles.cardImage}
      />
      <h5 className={styles.cardTitle}>{product.title}...</h5>
      <div className={styles.cardDetails}>
        <div className={styles.cardInfo}>
          <p className={styles.cardYear}>{product.category.name}</p>
        </div>
        <p className={styles.cardTag}>{product.price}</p>
      </div>
    </div>
  );
};

CardSimple.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    original_title: PropTypes.string.isRequired,
    overview: PropTypes.string,
    release_date: PropTypes.string,
    poster_path: PropTypes.string, // Poster path might be nullable, so not required
  }).isRequired,
};

export default CardSimple;
