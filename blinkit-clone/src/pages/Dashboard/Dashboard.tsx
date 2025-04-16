import { useEffect, useState } from "react";
import { fetchProducts } from "../../services/productService";
import styles from "./Dashboard.module.scss";
import { IProduct } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
} from "../../features/cart/cartSlice";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";

const Dashboard = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const getProducts = async () => {
    try {
      const response = await fetchProducts();
      setProducts(response);
      console.log("res", response);
    } catch (error) {
      console.log("Error=>", error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  const getQuantity = (productId: number) => {
    return cartItems.find((item) => item.id === productId)?.quantity || 0;
  };
  return (
    <div className={styles.dashboardContainer}>
      <Banner />
      <div className={styles.productGrid}>
        {products.map((product) => {
          const quantity = getQuantity(product.id);
          return (
            <div key={product.id} className={styles.productCard}>
              <Link to={`/products/${product.id}`}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className={styles.images}
                />
              </Link>
              <h3>{product.title}</h3>
              <div className={styles.details}>
                <div>{product.price}</div>
                <div className={styles.cartButton}>
                  {quantity === 0 ? (
                    <button
                      onClick={() => dispatch(addToCart(product))}
                      className={styles.addButton}
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <div>
                      <button
                        onClick={() => dispatch(decrementQuantity(product.id))}
                        className={styles.addButton}
                      >
                        -
                      </button>
                      <span>{quantity}</span>
                      <button
                        onClick={() => dispatch(incrementQuantity(product.id))}
                        className={styles.addButton}
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
