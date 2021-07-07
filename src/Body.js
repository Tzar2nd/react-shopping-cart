import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Home from "./pages/Home";

export default function Body() {
  return (
    <BodyContainer>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shop" exact component={Shop} />
      </Switch>
    </BodyContainer>
  );
}

const BodyContainer = styled.div`
  display: flex;
  background: #888;
`;
