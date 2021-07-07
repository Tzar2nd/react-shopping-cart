import styled from "styled-components";
import background from "../assets/pram1.jpg";
import pram from "../assets/pram2.jpg";
import { Parallax } from "react-parallax";

const parallaxScale = (perspective, distance) => {
  console.log((perspective - distance) / perspective);
  return (perspective - distance) / perspective;
};

const HomeContainer = styled.div`
  overflow-x: hidden;
  textalign: center;
`;

const inlineStyle = {
  background: "#fff",
  left: "50%",
  bottom: "0px",
  width: "100vw",
  textAlign: "center",
  position: "absolute",
  transform: "translate(-50%, 0%)",
  boxShadow: "0px 5px 5px 2px rgba(0, 0, 0, 0.5)",
  padding: "8px",
};

function Home() {
  return (
    <HomeContainer>
      <Parallax bgImage={background} strength={100} >
        <div style={{ position: "relative", height: "90vh", width: "100vw" }}>
          <div style={inlineStyle}>
            <div style={{ position: "relative" }}>
              <h1>Welcome to Tot's Travel, the best prams in the business!</h1>
              <p>
                We have only the best prams for all your baby travel needs. Have
                your little one travel in style and visit our shop to find more
                great deals!
              </p>
            </div>
          </div>
        </div>
      </Parallax>

      <Parallax bgImage={pram} strength={100}>
        <div style={{ height: 500, width: "100vw" }}>
          <div style={inlineStyle}>
            <p>
              Still unsure of what pram to purchase? Feel free to call one of
              our helpful sales staff on +123456789 for no commitment advice and
              work out the best way to get your baby moving!
            </p>
          </div>
        </div>
      </Parallax>
      <div style={{ height: "30px", background: "#fff" }}></div>
    </HomeContainer>
  );
}

export default Home;
