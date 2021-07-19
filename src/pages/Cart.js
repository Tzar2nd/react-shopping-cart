import styled from "styled-components";
import CartCard from "../components/CartCard";

const CartItem = (item) => <CartCard item={item} />;

const Cart = ({ show, toggleCart, getCartItems }) => {
  return (
    <CartBackground
      show={show}
      onClick={(e) => e.target === e.currentTarget && toggleCart()}
    >
      <CartContainer show={show}>
        <p>Cart</p>
        {getCartItems().map((item) => CartItem(item))}
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
  width: 60%;
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

export default Cart;
