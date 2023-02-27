import React, { useContext, useState } from "react";
import { UserContext } from "../../../../../App";

const TableRow = ({ data }) => {
  const { isDoctor } = useContext(UserContext);
  const [status, setStatus] = useState(data.Status);

  const handleStatusChange = (e) => {
    const id = e.target.name;
    const status = e.target.value;
    setStatus(status);

    const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    const token = sessionStorage.getItem("token");
    if (userInfo) {
      if (userInfo.email && token) {
        const adminEmail = userInfo.email;
        fetch(`https://api-doctors-portal.onrender.com/updateStatus/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ status, adminEmail }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              alert("Status Successfully Changed");
            }
          });
      }
    }
  };

  let cusClass = "action_status bg_color_red";
  if (status === "Visited") {
    cusClass = "bg_color_green visited";
  }

  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.age}</td>
      <td>
        {isDoctor ? (
          <select
            onChange={handleStatusChange}
            name={data._id}
            className={cusClass}
          >
            <option value={status} selected>
              {status}
            </option>
            <option className="bg_color_red" value="Not Visited">
              Not Visited
            </option>
            <option className="bg_color_green" value="Visited">
              Visited
            </option>
          </select>
        ) : (
          <span className={cusClass}>{status}</span>
        )}
      </td>
    </tr>
  );
};

export default TableRow;
