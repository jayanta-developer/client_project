import { gql, useQuery } from "@apollo/client";
import ClientRow from "./ClientRow";
import Spinner from "./Spinner";

const GET_CLIENT = gql`
query getClient {
  clients{
    id
    name
    email
    role
  }
}
`;

export default function Client() {
  const { loading, error, data } = useQuery(GET_CLIENT)
  if (loading) return <Spinner />
  if (error) return <p>Something went wrong!</p>

  return (<>{!loading && !error && (
    <table className="table table-hover mt-3">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {data.clients.map(client => (
          <ClientRow key={client.id} client={client} />
        ))}
      </tbody>
    </table>
  )}</>
  )
}
