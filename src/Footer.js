import styled from "styled-components";
import { Github } from "@styled-icons/boxicons-logos/Github";

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <TagLine>See my project code on GitHub</TagLine>
        <GithubIcon />
      </FooterContainer>
    </>
  );
}

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  bottom: 0;
  justify-content: center;
  color: white;
  background: #333;
  gap: 1rem;
`;

const TagLine = styled.div`
  text-align: center;
`

const GithubIcon = styled(Github)`
  width: 25px;
  color: white;
`;
