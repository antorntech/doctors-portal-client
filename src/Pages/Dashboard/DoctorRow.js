import React from "react";

const DoctorRow = ({ doctor, index, refetch }) => {
  const { name, img, specialty } = doctor;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <img className="w-10 rounded-full" src={img} alt="" />
      </td>
      <td>{name}</td>
      <td>{specialty}</td>
      <td>
        <button class="btn btn-xs">Remove User</button>
      </td>
    </tr>
  );
};

export default DoctorRow;
