import React from "react";

// Styles
import { Container, LinkText, FooterText } from "./footer.styles";

function Footer() {
  return (
    <Container>
      <FooterText>
        Made by:{" "}
        <LinkText
          href='https://github.com/Mantofka'
          target='_blank'
          rel='noreferrer'
        >
          https://github.com/Mantofka
        </LinkText>
      </FooterText>
    </Container>
  );
}

export default Footer;
