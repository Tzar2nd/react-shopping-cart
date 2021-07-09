import styled from "styled-components";
import { Cubes } from "@styled-icons/fa-solid/Cubes";
import { BabyCarriage } from "@styled-icons/boxicons-solid/BabyCarriage";
import { Link } from "react-router-dom";

export default function Header({ toggleCart, cartQuantity}) {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo>Tots' Travel</Logo>
        <CubeIcon />
      </LogoContainer>
      <NavItems>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <CartIconsContainer>
          <CartIcon onClick={(e) => toggleCart()} />
          <CartItemsCount cartQuantity={cartQuantity}>
            {cartQuantity}
          </CartItemsCount>
        </CartIconsContainer>
      </NavItems>
    </HeaderContainer>
  );
}

const NavLink = styled(Link)`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  margin: auto;
  color: white;
  text-decoration: none;
  &:hover {
    color: yellow;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  background: #bbb;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Logo = styled.h1`
  font-size: 2.6rem;
`;

const CubeIcon = styled(Cubes)`
  width: 50px;
  color: white;
`;

const CartIconsContainer = styled.div`
  display: flex;
  position: relative;
`;

const CartIcon = styled(BabyCarriage)`
  width: 40px;
  color: white;
  cursor: pointer;
  user-select: none;
`;

const CartItemsCount = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 2px;
  right: 2px;
  display: ${(props) => (props.cartQuantity === 0 ? "none" : "inline-flex")};
  justify-content: center;
  align-items: center;
  background: red;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  box-shadow: 1px 1px 3px #333;
`;

const NavItems = styled.ul`
  display: inline-flex;
  bottom: 0;
  flex-wrap: wrap;
  gap: 3rem;
  list-style-type: none;
  cursor: pointer;
  text-decoration: none;
`;
