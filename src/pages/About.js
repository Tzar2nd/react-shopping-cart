import styled from "styled-components";
import background from "../assets/about-page.jpg";

function About() {
  return (
    <AboutContainer>
      <Header>About</Header>
      <Paragraph>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?
      </Paragraph>
      <Picture src={background} alt="#" />
      <Paragraph>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </Paragraph>
    </AboutContainer>
  );
}

const Header = styled.h1`
  padding-left: 8px;
`
const AboutContainer = styled.div`
  background: white;
  width: 100%;
  height: 100%;
`;

const Paragraph = styled.p`
  text-align: left;
  padding-bottom: 8px;
  padding-left: 8px;
`;

const Picture = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;

export default About;
