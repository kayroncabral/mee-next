import { gql } from "@apollo/client";

import { SHOPFRONT_ATTRIBUTES } from "src/graphql/shopfront/fragments";

export const GET_SHOPFRONTS = gql`
  query($id: ID!) {
    shopfronts(id: $id) {
      ...shopfrontAttributes
    }
  }
  ${SHOPFRONT_ATTRIBUTES}
`;
