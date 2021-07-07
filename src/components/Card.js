import styled from "styled-components";

const formatPrice = (price) => {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

const Card = ({ id, title, price, imageSrc }) => {
  return (
    <CardContainer>
      <Image src={imageSrc} alt="#" height="100px"></Image>
      <ItemDescription>{title}</ItemDescription>
      <ItemPriceBackground>
        <ItemPrice>{formatPrice(price)}</ItemPrice>
      </ItemPriceBackground>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  padding: 8px 0 0 0;
  box-shadow: 0px 5px 5px 2px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  background: #fff;
  cursor: pointer;
  transition: transform 0.1s;
  &:hover {
    transform: scale(1.02);
  }
`;

const Image = styled.img`
  height: 100px;
  margin: auto;
  padding: 8px;
`;

const ItemDescription = styled.p`
  margin: auto;
  padding: 0 1rem;
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 8px;
`;

const ItemPriceBackground = styled.div`
  display: flex;
  width: 100%;
  background: yellow;
`;

const ItemPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: auto;
  padding: 4px;
`;

export default Card;