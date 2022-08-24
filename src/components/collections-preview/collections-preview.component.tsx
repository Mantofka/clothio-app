import React from "react";

import CollectionsItem from "../collections-item/collections-item.component";

// Styles
import { Container } from "./collections-preview.styles";

import { DUMMY_COMMERCE_DATA } from "../../clothes";

const collections = [
  { title: "Bags" },
  { title: "Shoes" },
  { title: "Hats" },
  { title: "Men" },
  { title: "Women" },
];

function CollectionsPreview() {
  return (
    <Container>
      {Object.entries(DUMMY_COMMERCE_DATA).map(
        ([title, { id, sectionImageUrl }]) => (
          <CollectionsItem
            key={id}
            collectionTitle={title.charAt(0).toUpperCase() + title.slice(1)}
            imageUrl={sectionImageUrl}
          />
        )
      )}
    </Container>
  );
}

export default CollectionsPreview;
