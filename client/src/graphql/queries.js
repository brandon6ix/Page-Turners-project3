import { gql } from '@apollo/client';

export const GET_EXTERNAL_BOOKS = gql`
  query GetExternalBooks {
    externalBooks {
      id
      title
      author
      description
      price
      image
    }
  }
`;