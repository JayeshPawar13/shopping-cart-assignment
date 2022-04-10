import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../actions/actioncreators";
import styles from "./Products.module.scss";

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
  const dispatch = useDispatch();
  const [products, setProducts] = useState<Product[]>([]);
  console.log(id);
  useEffect(() => {
    axios.get(`http://localhost:4200/products`).then((response) => {
      console.log(response.data);
      if (id) {
        setProducts(
          response.data.filter((product: Product) => product.category === id)
        );
      } else {
        setProducts(response.data);
      }
    });
  }, [id]);
  return (
    <div className={styles.productList}>
      {products.map((product) => {
        return (
          <div key={product.id} className={styles.product}>
            <h6 style={{ height: "3em" }}>{product.name}</h6>
            <div
              style={{ display: "flex", width: "300px", marginBottom: "1em" }}
            >
              <img
                src={require(`../../assets/static/images/products/${product.imageURL}`)}
                alt=""
                height="150px"
                width="100px"
              />
              <p
                style={{
                  backgroundColor: "gainsboro",
                  fontSize: "12px",
                }}
              >
                {product.description}
              </p>
            </div>
            <button
              className="btn btn-block"
              onClick={() => dispatch(addToCart(product))}
            >
              Buy Now @ Rs.{product.price}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
