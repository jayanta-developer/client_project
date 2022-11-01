import React, { useState } from 'react';
import { FaTrash, FaUserEdit } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT, UPDATE_CLIENT } from "../mutations/clientMutation"

//Style
import clientRowStyle from "../style/clientRow.css";


export default function ClientRow({ client }) {
  const [hide, setHide] = useState(false);

  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
  })

  const [updateClient] = useMutation(UPDATE_CLIENT, {
    variables: { id: client.id },
  })


  return (
    <>
      <tr >
        <td>{client.name}</td>
        <td>{client.email}</td>
        <td>{client.phone}</td>
        <td>{String(client.active)}</td>
        <td>{client.role}</td>
        <td>
          <button  ><FaUserEdit /></button>
        </td>
        <td>
          <button className="btn btn-danger btn-sm"
            onClick={deleteClient}>
            <FaTrash /></button>
        </td>
      </tr>

      <tr onClick={(e => console.log(e))}>
        <td><input placeholder="name" type="text" /> </td>
        <td><input placeholder="email" type="text" /> </td>
        <td><input placeholder="phone" type="text" /></td>
        <td> <input placeholder="active" type="text" /></td>
        <td><input placeholder="role" type="text" /></td>
        <td><button className="btn btn-primary">save</button></td>
      </tr>


    </>
  )
}