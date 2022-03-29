import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Products.module.scss';

interface Product {
  category: string;
  description: string;
  id: string;
  imageURL: string;
  name: string;
  price: number;
  sku: string;
  stock: number;
}

function Products() {
  let { id } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  console.log(id);
  useEffect(() => {
    axios.get(`http://localhost:3003/products`).then((response) => {
      console.log(response.data);
      setProducts(
        response.data.filter((product: Product) => product.category === id)
      );
    });
  }, [id]);
  return (
    <div className={styles.productList}>
      {products.map((product) => {
        return (
          <div key={product.id} className={styles.product}>
            <h5>{product.name}</h5>
            <div>
              <img
                src={require(`../../assets/static/images/products/${product.imageURL}`)}
                alt=""
              />
              <p>{product.description}</p>
            </div>
            <button className="btn btn-primary">
              Buy Now @{product.price}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
