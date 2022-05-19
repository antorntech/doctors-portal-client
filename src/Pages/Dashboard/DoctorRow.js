import React from "react";
import { toast } from "react-toastify";

const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
  const { name, img, specialty, email } = doctor;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <img className="w-8 rounded-full" src={img} alt={name} />
      </td>
      <td>{name}</td>
      <td>{specialty}</td>
      <td>
        <label
          onClick={() => setDeletingDoctor(doctor)}
          for="delete-confirm-modal"
          class="btn btn-xs btn-error"
        >
          Remove Doctor
        </label>
      </td>
    </tr>
  );
};

export default DoctorRow;
