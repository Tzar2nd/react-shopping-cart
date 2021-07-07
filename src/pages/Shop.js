import styled from "styled-components";
import { useState, useEffect } from "react";
import Card from '../components/Card'

function Shop() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadItems = async () => {
      setItems(await fetchItems());
    };

    loadItems();
  }, []);

  const fetchItems = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    console.log(data);
    return data;
  };

  const itemCards = items.map((item) => (
    <Card 
      id={item.id}
      title={item.title}
      price={item.price}
      imageSrc={item.image}
    />
  ));

  return (
    <>
    <ShopContainer>
      <ItemsContainer>{itemCards}</ItemsContainer>
    </ShopContainer>
    </>
  );
}

const ShopContainer = styled.div`
  height: auto;
  width: 100%;
  background: #eee;
  padding: 0px 0px 32px 0px;
`;

const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, fit-content(25%));
  gap: 2.5rem;  
  margin: 2rem;  
  justify-content: center;
`;

export default Shop;
