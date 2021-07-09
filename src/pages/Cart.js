import styled from "styled-components";

const Cart = ({ show, listCartItems }) => {
  return (
    <CartContainer show={show}>
      <p>Cart</p>
      {listCartItems()}
    </CartContainer>
  );
};

const CartContainer = styled.div`
  position: fixed;
  display: ${props => props.show ? 'block' : 'none'};
  z-index: 1;
  height: 80%;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;
  left: 0;
  right: 0;
  background-color: #fff;
  transition: 1s ease-in-out;
`;

export default Cart;
