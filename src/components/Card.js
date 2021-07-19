import styled from "styled-components";
import { Plus } from "@styled-icons/boxicons-regular/Plus";
import { Minus } from "@styled-icons/boxicons-regular/Minus";

const formatPrice = (price) => {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

const Card = ({
  item,
  cartContainsItem,
  addCartItem,
  removeCartItem,
}) => {
  return (
    <CardContainer>
      <Image src={item.image} alt="#" height="100px"></Image>
      <ItemDescription>{item.title}</ItemDescription>
      <CardDetailsContainer>
        <CardMinus
          cartContainsItem={cartContainsItem(item.id)}
          onClick={() => removeCartItem(item.id)}
        />
        <ItemPrice>{formatPrice(item.price)}</ItemPrice>
        <CardPlus onClick={() => addCartItem(item)} />
      </CardDetailsContainer>
    </CardContainer>
  );
};

const CardDetailsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background: ${({theme}) => theme.colors.secondary};
`;

const CardPlus = styled(Plus)`
  height: 24px;
  cursor: pointer;
  padding-right: 8px;
`;

const CardMinus = styled(Minus)`
  visibility: ${(props) => (!props.cartContainsItem && "hidden")};
  height: 24px;
  cursor: pointer;
  padding-left: 8px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  padding: 8px 0 0 0;
  box-shadow: 0px 5px 5px 2px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  background: #fff;
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

const ItemPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: auto;
  padding: 4px;
`;

export default Card;
