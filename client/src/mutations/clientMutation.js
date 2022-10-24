import { gql } from "@apollo/client";

const DELETE_CLIENT = gql`
  mutation deleteClient($id: ID!) {
    deleteClient(id: $ID) {
      id
      name
      email
    }
  }
`;
export { DELETE_CLIENT };
