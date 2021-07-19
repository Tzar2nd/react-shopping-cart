import styled from "styled-components";
import CartCard from "../components/CartCard";
import { formatPrice } from '../utils/Utils';

const Cart = ({
  show,
  toggleCart,
  getCartItems,
  addCartItem,
  removeCartItem,
  cartContainsItem,
}) => {

  return (
    <CartBackground
      show={show}
      onClick={(e) => e.target === e.currentTarget && toggleCart()}
    >
      <CartContainer show={show}>
        <p>Shopping Cart</p>
        {getCartItems().length === 0 ? <p>Your cart is empty</p> : '' }
        {getCartItems().map((item) =>
            <CartCard
            key={item.id}
            item={item}
            addCartItem={addCartItem}
            removeCartItem={removeCartItem}
            cartContainsItem={cartContainsItem}
          />
        )}
      <div>Grand Total: {formatPrice(getCartItems().reduce((total, item) => total + item.price * item.quantity, 0))}</div>
      <CartButton onClick={() => alert(`This isn't a real store :)`)}>Pay</CartButton>
      </CartContainer>

    </CartBackground>
  );
};

const CartBackground = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

const CartContainer = styled.div`
  position: fixed;
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  z-index: 2;
  height: 80%;
  width: fit-content;
  min-width: 500px;
  overflow: auto;
  padding: 1rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;
  left: 0;
  right: 0;
  background-color: #fff;
  transition: 1s ease-in-out;
  box-shadow: 0px 5px 5px 2px rgba(0, 0, 0, 0.5);
  border-bottom: 16px solid #fff;
  border-top: 16px solid #fff;
`;

const CartButton = styled.button`
  padding: 1rem;
  pointer: cursor;
  margin-left: auto;
  margin-right: 1rem;
  background: ${({theme}) => theme.colors.secondary};
  border: 2px solid gray;
`;

export default Cart;