import React, { useContext } from "react";
import { UserContext } from "../context/usercontext";

export default function ({ editHandler, deleteHandler }) {
  const { user } = useContext(UserContext);
  return (
    <table id="users">
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Actions</th>
      </tr>
      {user.map((data) => {
        return (
          <tr key={data.key}>
            <td>{data.fname}</td>
            <td>{data.lname}</td>
            <td>{data.email}</td>
            <td>{data.phn}</td>
            <td>
              <span
                onClick={() =>
                  editHandler(
                    data.id,
                    data.fname,
                    data.lname,
                    data.email,
                    data.phn
                  )
                }
                style={{ cursor: "pointer" }}
              >
                Edit
              </span>{" "}
              ,
              <span
                onClick={() => deleteHandler(data.id)}
                style={{ cursor: "pointer" }}
              >
                Delete
              </span>
            </td>
          </tr>
        );
      })}
    </table>
  );
}
