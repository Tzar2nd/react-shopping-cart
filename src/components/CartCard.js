import styled from "styled-components";

const CartCard = ({ item }) => {
  return (
    <CardWrapper>
      <CardImage src={item.image} alt="" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: "1rem",
        }}
      >
        <div>{item.title}</div>
        <div>{item.price}</div>
        <div>{item.quantity}</div>
      </div>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  width: 500px;
  margin: 1rem;
  background: green;
`;

const CardImage = styled.img`
  height: 100px;
  width: 100px;
  object-fit: contain;
`;

export default CartCard;
