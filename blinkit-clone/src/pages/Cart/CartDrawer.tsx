import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import styles from "./CartDrawer.module.scss";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../features/cart/cartSlice";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: Props) => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();
  return (
    <div className={`${styles.drawer}${isOpen ? styles.open : ""}`}>
      <div className={styles.header}>
        <h2>My Cart</h2>
        <button onClick={onClose}>X</button>
      </div>
      {cartItems.length === 0 ? (
        <p className={styles.empty}>Your cart is empty</p>
      ) : (
        <div className={styles.cartItems}>
          {cartItems.map((item) => {
            return (
              <div key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.quantity}</p>
                </div>
                <div className={styles.controls}>
                  <button onClick={() => dispatch(decrementQuantity(item.id))}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(incrementQuantity(item.id))}>
                    +
                  </button>
                  <button onClick={() => dispatch(removeFromCart(item.id))}>
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CartDrawer;
