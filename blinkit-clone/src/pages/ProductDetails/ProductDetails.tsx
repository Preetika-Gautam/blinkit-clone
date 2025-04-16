import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProduct } from "../../types";
import { useDispatch } from "react-redux";
import styles from "./ProductDetails.module.scss";
import { addToCart } from "../../features/cart/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct | null>(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log("Failed to fetch the product details", error);
      }
    };
    fetchProduct();
  }, [id]);
  if (!product) return <p>Loading...</p>;
  return (
    <div className={styles.productDetails}>
      <img
        src={product.thumbnail}
        alt={product.title}
        className={styles.thumbnail}
      />
      <div className={styles.details}>
        <h2>{product.title}</h2>
        <p className={styles.price}>{product.price}</p>
        <button onClick={() => dispatch(addToCart(product))}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
