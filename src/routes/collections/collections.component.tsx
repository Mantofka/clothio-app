import React from "react";

// Styles
import { Container, TitleText } from "./collections.styles";

// Components
import CollectionsPreview from "../../components/collections-preview/collections-preview.component";

function CollectionsPage() {
  return (
    <Container>
      <TitleText>What are you looking for?</TitleText>
      <CollectionsPreview />
    </Container>
  );
}

export default CollectionsPage;
