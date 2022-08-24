import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../../redux/store";
import { selectThemeMode } from "../../redux/interface/interface.selector";

import Arrow from "../../public/arrow";

// Styles
import {
  Container,
  TitleText,
  Image,
  Button,
  InformationContainer,
} from "./homepage.styles";

import Homepage from "../../public/homepage.jpg";
import { AnimatePresence } from "framer-motion";

function HomepagePage() {
  const themeMode = useAppSelector(selectThemeMode);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <Container>
      <InformationContainer>
        <TitleText>A place to Fulfil Your desirement.</TitleText>
        <Button
          onClick={() => navigate("/collections")}
          initial={{ width: "220px" }}
          animate={isHovered ? { width: "260px" } : { width: "220px" }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          Browse collections
          {isHovered && (
            <AnimatePresence>
              <Arrow isHovered={isHovered} />
            </AnimatePresence>
          )}
        </Button>
      </InformationContainer>

      <Image dark={themeMode === "dark"} alt='t-shirts' src={Homepage} />
    </Container>
  );
}

export default HomepagePage;
