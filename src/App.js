import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Cart from "./pages/Cart";
import { useState, useEffect } from "react";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  const toggleCart = () => setShowCart(!showCart);

  useEffect(() => {
    console.table(cartItems);
  }, [cartItems]);

  const cartContainsItem = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const addCartItem = (item) => {
    if (!cartContainsItem(item.id)) {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    }

    setCartQuantity(cartQuantity + 1);
  };

  const removeCartItem = (id) => {
    // if it is the last item in the cart, remove it
    if (cartContainsItem(id)) {
      const item = cartItems.find((cartItem) => cartItem.id === id);
      if (item.quantity === 1) {
        setCartItems(cartItems.filter((cartItem) => cartItem.id !== id));
      }

      // otherwise just reduce the quantity by one
      else {
        setCartItems(
          cartItems.map((cartItem) =>
            cartItem.id === id
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          )
        );
      }
    }

    setCartQuantity(cartQuantity - 1);
  };

  const getCartItems = () => {
    return cartItems;
  };

  return (
    <div>
      <Cart
        show={showCart}
        toggleCart={toggleCart}
        getCartItems={getCartItems}
      />
      <Header toggleCart={toggleCart} cartQuantity={cartQuantity}>
        Home page
      </Header>
      <Body
        cartContainsItem={cartContainsItem}
        addCartItem={addCartItem}
        removeCartItem={removeCartItem}
      ></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
