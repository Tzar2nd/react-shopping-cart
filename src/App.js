import Header from "./Header";
import Body from './Body';
import Footer from './Footer';
import Cart from "./pages/Cart";

function App() {
  return (
    <div>
      <Cart
        display='block'
      />
      <Header>Home page</Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
