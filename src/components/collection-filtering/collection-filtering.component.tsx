import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

// Types
import { collectionIdType } from "./collection-filtering.utils";

// Styles
import {
  Container,
  FilteringContainer,
  FilteringCriteriaContainer,
  CriteriaTitle,
  InlineWrapper,
  CriteriaTypeText,
  CountContainer,
  ItemCount,
} from "./collection-filtering.styles";

import ThickArrow from "../../public/thick-arrow";
import IconWrapper from "../../public/icon-wrapper";

// Utils
import { getCollectionTypes } from "./collection-filtering.utils";

function CollectionFiltering() {
  const [collectionTypes, setCollectionTypes] = useState({});
  const [isOpened, setIsOpened] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    id &&
      setCollectionTypes((prevState) =>
        getCollectionTypes(id as collectionIdType)
      );
  }, []);

  useEffect(() => {
    console.log(collectionTypes);
  }, [collectionTypes]);

  return (
    <Container>
      <FilteringContainer>
        <FilteringCriteriaContainer>
          <InlineWrapper onClick={() => setIsOpened((state) => !state)}>
            <CriteriaTitle>Type</CriteriaTitle>
            <IconWrapper
              Component={ThickArrow}
              style={{ marginRight: "6px" }}
              isOpened={isOpened}
            />
          </InlineWrapper>
          {isOpened && (
            <>
              {Object.entries(collectionTypes).map(([type, count]) => (
                <InlineWrapper>
                  <CriteriaTypeText>{type}</CriteriaTypeText>
                  <CountContainer>
                    <ItemCount>{count as number}</ItemCount>
                  </CountContainer>
                </InlineWrapper>
              ))}
            </>
          )}
        </FilteringCriteriaContainer>
      </FilteringContainer>
    </Container>
  );
}

export default CollectionFiltering;
