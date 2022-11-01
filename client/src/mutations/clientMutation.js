import { gql } from "@apollo/client";

const DELETE_CLIENT = gql`
  mutation deleteClient($id: ID!) {
    deleteClient(id: $id) {
      id
      active
    }
  }
`;

const UPDATE_CLIENT = gql`
  mutation updateClient($id: ID!) {
    updateClient(id: $id) {
      id
      name
      email
      phone
      role
      active
    }
  }
`;

export { DELETE_CLIENT, UPDATE_CLIENT };
