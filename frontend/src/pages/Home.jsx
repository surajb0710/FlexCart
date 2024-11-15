import style from './Home.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CardSimple from '../components/CardSimple';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://api.storerestapi.com/products')
      .then((res) => {
        setProducts(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError('Failed to load products.');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <Navbar />
      <div className={style.products}>
        {products.map((product) => (
          <CardSimple product={product} key={product._id} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
