import React from "react";

import CollectionFiltering from "../../components/collection-filtering/collection-filtering.component";

// Styles
import { Container } from "./collection.styles";

function CollectionPage() {
  return (
    <Container>
      <CollectionFiltering />
    </Container>
  );
}

export default CollectionPage;
