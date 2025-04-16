import { useSelector } from "react-redux";
import styles from "./Header.module.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { RootState } from "../../store/store";
import { useState } from "react";
import CartDrawer from "../../pages/Cart/CartDrawer";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <img
          src="https://couponzania.com/wp-content/uploads/2025/03/Blinkit-Logo-e1741167448909.webp"
          alt="logo"
          className={styles.logoIcon}
        />
      </div>
      <div className={styles.addressContainer}>Address</div>
      <div className={styles.searchBarContainer}>
        <SearchBar />
      </div>
      <div className={styles.loginButtonContainer}>Login</div>
      <div className={styles.cartContainer} onClick={() => setIsCartOpen(true)}>
        <ShoppingCartIcon sx={{ color: "white" }} />
        <div>My Cart {totalQuantity > 0 && <span>{totalQuantity}</span>}</div>
      </div>
      {isCartOpen && (
        <div className={styles.drawerOverlay}>
          <CartDrawer
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
