import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Image, ItemTitle } from "./collections-item.styles";

const CollectionsItem: React.FC<{
  collectionTitle: string;
  imageUrl?: string;
}> = ({ collectionTitle, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <Container
      onClick={() => navigate(`/collection/${collectionTitle.toLowerCase()}`)}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Image image={imageUrl} />
      <ItemTitle
        initial={{ opacity: 0 }}
        animate={
          isHovered
            ? { opacity: 1, transition: { delay: 0.1 } }
            : { opacity: 0 }
        }
      >
        {collectionTitle}
      </ItemTitle>
    </Container>
  );
};

export default CollectionsItem;
