import { gql } from "@apollo/client";

export const SHOPFRONT_ATTRIBUTES = gql`
  fragment shopfrontAttributes on Shopfront {
    _id
    merchant
    banner
    picture
    name
    address {
      street
      number
      complement
      district
      city
      state
      postalCode
      lat
      lng
    }
    products {
      _id
      name
      description
      image
      price
    }
    delivery {
      fee
      distance
      condition
    }
  }
`;
