import React, { useState, useRef } from 'react';
import { FaTrash, FaUserEdit } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT, UPDATE_CLIENT } from "../mutations/clientMutation"
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';


//Style
import "../style/clientRow.css";


export default function ClientRow({ client, index }) {
  const [active, setActive] = useState(false)
  console.log(active)




  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
  })

  const [updateClient] = useMutation(UPDATE_CLIENT, {
    variables: { id: client.id },
  })


  return (
    <>
      <TableRow>
        <TableCell>{client.name}</TableCell>
        <TableCell>{client.email}</TableCell>
        <TableCell>{client.phone}</TableCell>
        <TableCell>{client.role}</TableCell>
        <TableCell>{String(client.active)}</TableCell>
        <TableCell><button className="btn btn-danger btn-sm" onClick={deleteClient}> <FaTrash /></button></TableCell>
      </TableRow>


      <TableRow className={`${active ? "active" : "disable"}`}>
        <TableCell><input placeholder="name" type="text" /> </TableCell>
        <TableCell><input placeholder="email" type="text" /> </TableCell>
        <TableCell><input placeholder="phone" type="text" /></TableCell>
        <TableCell> <input placeholder="active" type="text" /></TableCell>
        <TableCell><input placeholder="role" type="text" /></TableCell>
        <TableCell><button className="btn btn-primary">save</button></TableCell>
      </TableRow>
    </>

  )
}