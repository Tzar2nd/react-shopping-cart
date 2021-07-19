import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Home from "./pages/Home";

export default function Body({
  cartContainsItem,
  addCartItem,
  removeCartItem,
}) {
  return (
    <BodyContainer>
      <Switch>
        <Route path="/react-shopping-cart/" exact component={Home} />
        <Route path="/react-shopping-cart/about" component={About} />
        <Route
          path="/react-shopping-cart/shop"
          exact
          render={(props) => (
            <Shop
              cartContainsItem={cartContainsItem}
              addCartItem={addCartItem}
              removeCartItem={removeCartItem}
            />
          )}
        />
      </Switch>
    </BodyContainer>
  );
}

const BodyContainer = styled.div`
  display: flex;
  background: #888;
`;
