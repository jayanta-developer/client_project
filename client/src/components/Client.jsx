import { gql, useQuery } from "@apollo/client";
import ClientRow from "./ClientRow";
import Spinner from "./Spinner";

import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const GET_CLIENT = gql`
query getClient {
  clients{
    id
    name
    email
    role
    active
    phone
  }
}
`;

export default function Client() {
  const { loading, error, data } = useQuery(GET_CLIENT)
  if (loading) return <Spinner />
  if (error) return <p>Something went wrong!</p>

  return (<>{!loading && !error && (
    <TableContainer >
      <Table>
        <TableHead>.
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.clients.map((client, index) => (
            <ClientRow key={client.id} client={client} index={index} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>



    // <table className="table table-hover mt-3">
    //   <thead>
    //     <tr>
    //       <th>Name</th>
    //       <th>Email</th>
    //       <th>Phone</th>
    //       <th>Active</th>
    //       <th>Role</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {data.clients.map((client, index) => (
    //       <ClientRow key={client.id} client={client} index={index} />
    //     ))}
    //   </tbody>
    // </table>
  )}</>
  )
}
