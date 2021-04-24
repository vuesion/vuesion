/* istanbul ignore file */
import gql from 'graphql-tag';

export const GetExamplePageData = gql`
  query GetExamplePageData {
    characters {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          id
          name
          type
          dimension
          created
        }
        location {
          id
          name
          type
          dimension
          created
        }
        image
        episode {
          id
          name
          air_date
          created
        }
        created
      }
    }
  }
`;
