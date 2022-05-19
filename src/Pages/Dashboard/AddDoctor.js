import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const AddDoctor = () => {
  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:5000/services").then((res) => res.json())
  );

  const imageStorageKey = "2a086f2db1e0e008d32e31f3ad98ce25";

  const handleAddDoctor = async (event) => {
    event.preventDefault();
    const image = event.target.image.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: event.target.name.value,
            email: event.target.email.value,
            specialty: event.target.specialty.value,
            img: img,
          };
          fetch("http://localhost:5000/doctor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Successfully add doctor", {
                  autoClose: 1000,
                });
                event.target.reset();
              } else {
                toast.error("Failed to add doctor", {
                  autoClose: 1000,
                });
              }
            });
        }
        console.log("imgBB", result);
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="px-6 lg:px-12 lg:w-3/6">
      <h2 className="text-xl py-2">Add a New Doctor</h2>
      <form onSubmit={handleAddDoctor}>
        <label className="label">
          <span className="label-text text-lg">Name</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          className="input input-bordered w-full max-w-xs mb-2"
        />
        <label className="label">
          <span className="label-text text-lg">Email</span>
        </label>
        <input
          required
          type="email"
          name="email"
          placeholder="Enter email"
          className="input input-bordered w-full max-w-xs mb-2"
        />
        <label className="label">
          <span className="label-text text-lg">Specialty</span>
        </label>
        <select
          name="specialty"
          className="select select-bordered w-full max-w-xs mb-2"
        >
          {services.map((service) => (
            <option key={service._id} value={service.name}>
              {service.name}
            </option>
          ))}
        </select>
        <label className="label">
          <span className="label-text text-lg">Photo</span>
        </label>
        <input
          required
          type="file"
          name="image"
          className="input input-bordered w-full max-w-xs pt-1.5 mb-4"
        />
        <input
          type="submit"
          value="Add Now"
          className="btn btn-accent w-full max-w-xs mb-2"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
