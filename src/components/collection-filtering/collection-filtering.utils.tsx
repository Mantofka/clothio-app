import { DUMMY_COMMERCE_DATA } from "../../clothes";

export type collectionIdType = keyof typeof DUMMY_COMMERCE_DATA;

export const getCollectionTypes = (id: collectionIdType) => {
  let collectionTypes = (({ id, sectionImageUrl, ...rest }) => rest)(
    DUMMY_COMMERCE_DATA[id]
  );
  const convertedTypes: { [key: string]: number } = {};
  Object.entries(collectionTypes).map(
    ([type, items]) =>
      (convertedTypes[type as keyof typeof convertedTypes] = items.length)
  );

  Object.entries(convertedTypes).map(([type, count]) => console.log(type, count));
  return convertedTypes;
};
