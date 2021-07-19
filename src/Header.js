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
        <NavLink to="/react-shopping-cart/">Home</NavLink>
        <NavLink to="/react-shopping-cart/about">About</NavLink>
        <NavLink to="/react-shopping-cart/shop">Shop</NavLink>
        <CartIconsContainer>
          <CartIcon onClick={(e) => toggleCart(e)} />
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
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.primary};
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
  color: ${({ theme }) => theme.colors.icons.cubeIcon};
`;

const CartIconsContainer = styled.div`
  display: flex;
  position: relative;
`;

const CartIcon = styled(BabyCarriage)`
  width: 40px;
  color: ${({ theme }) => theme.colors.icons.cartIcon};
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
