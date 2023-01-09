import React from "react";
import {
  ButtonsContainer,
  Container,
  Description,
  Title,
  TitleContainer,
} from "./styles";
import lightsaber from "../../images/light-saber.gif";

const Header = () => {
  return (
    <Container>
      <ButtonsContainer>
        <span>Projects</span>
        <span>Contact</span>
        <span>About</span>
      </ButtonsContainer>
      <TitleContainer>
        <Title>
          Saschenka
          <img src={lightsaber} alt='light-saber-gif' />
        </Title>
      </TitleContainer>

      <Description>
        Junior Full-Stack web developer, focused on design, perfection and
        performance.
      </Description>
    </Container>
  );
};

export default Header;
