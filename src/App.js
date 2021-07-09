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
    console.log(cartItems);
  });

  const cartContainsItem = (item) => {
    return cartItems.includes(item);
  };

  const addCartItem = (item) => {
    console.log(item);
    setCartItems([...cartItems, item.id]);
    setCartQuantity(cartQuantity + 1);
  };

  const removeCartItem = (item) => {
    const newCartItems = cartItems;

    if (newCartItems.includes(item)) {
      newCartItems.splice(cartItems.lastIndexOf(item.id), 1);
      setCartQuantity(cartQuantity - 1);
      setCartItems(cartItems, newCartItems);
    }
  };

  const listCartItems = () => {
    return cartItems.map((item) => {
      return <p>{item}</p>;
    });
  };

  return (
    <div>
      <Cart show={showCart} listCartItems={listCartItems} />
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
