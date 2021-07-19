import styled from "styled-components";
import { Plus } from "@styled-icons/boxicons-regular/Plus";
import { Minus } from "@styled-icons/boxicons-regular/Minus";
import { formatPrice } from "../utils/Utils";

const CartCard = ({ item, addCartItem, removeCartItem, cartContainsItem }) => {
  return (
    <CardWrapper>
      <div style={{ display: "flex" }}>
        <CardImage src={item.image} alt="" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "1rem",
          }}
        >
          <div>{item.title}</div>
          <div>{formatPrice(item.price)}</div>
        </div>
      </div>
      <div>Quantity: {item.quantity}</div>
      <div>
        <CardMinus
          cartContainsItem={cartContainsItem(item.id)}
          onClick={() => removeCartItem(item.id)}
        />
        <CardPlus onClick={() => addCartItem(item)} />
      </div>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 500px;
  margin: 1rem;
  background: ${({ theme }) => theme.colors.secondary};
  padding: 1rem;
  border-radius: 8px;
`;

const CardImage = styled.img`
  height: 100px;
  width: 100px;
  object-fit: contain;
`;

const CardPlus = styled(Plus)`
  height: 24px;
  cursor: pointer;
`;

const CardMinus = styled(Minus)`
  height: 24px;
  cursor: pointer;
`;

export default CartCard;
