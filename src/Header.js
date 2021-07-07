import styled from "styled-components";
import { Cubes } from "@styled-icons/fa-solid/Cubes";
import { BabyCarriage } from "@styled-icons/boxicons-solid/BabyCarriage";
import { Link } from "react-router-dom";
import { useState } from 'react';

const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  margin: auto;
  color: white;
  text-decoration: none;
  &:hover {
    color: yellow;
  }
`;

export default function Header() {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => setShowCart(true)

  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo>Tots' Travel</Logo>
        <CubeIcon />
      </LogoContainer>
      <NavItems>
        <NavLink to='/'>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <CartIcon />
      </NavItems>
    </HeaderContainer>
  );
}

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

const CartIcon = styled(BabyCarriage)`
  width: 40px;
  color: white;
  cursor: pointer;
`;

const NavItems = styled.ul`
  display: inline-flex;
  flex-wrap: no-wrap;
  gap: 3rem;
  list-style-type: none;
  cursor: pointer;
  text-decoration: none;
`;

