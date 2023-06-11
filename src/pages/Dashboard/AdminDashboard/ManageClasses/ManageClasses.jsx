import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/classes");
    return res.data;
  });

  const handleApprove = (classItem) => {
    fetch(`${import.meta.env.VITE_URL}/classes/approve/${classItem._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${classItem.className} class is approve now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDeny = (classItem) => {
    fetch(`${import.meta.env.VITE_URL}/classes/deny/${classItem._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "warning",
            title: `${classItem.className} class is Deny`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Class Image</th>
              <th>Class name</th>
              <th>Instructor name</th>
              <th>Instructor email</th>
              <th>Available seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Approve Button</th>
              <th>Deny Button</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((classItem, index) => (
              <tr key={classItem._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={classItem.imageUrl} alt="Class Image" />
                  </div>
                </td>
                <td>{classItem.className}</td>
                <td>{classItem.instructorName}</td>
                <td>{classItem.email}</td>
                <td>{classItem.seats}</td>
                <td>{classItem.price}</td>
                <td>{classItem.status}</td>
                <td>
                  {classItem.status === "approve" ? (
                    "approve"
                  ) : (
                    <button
                      onClick={() => handleApprove(classItem)}
                      className="btn btn-primary"
                    >
                      Approve
                    </button>
                  )}
                </td>
                <td>
                  {classItem.status === "denied" ? (
                    "denied"
                  ) : (
                    <button
                      onClick={() => handleDeny(classItem)}
                      className="btn btn-warning"
                    >
                      Deny
                    </button>
                  )}
                  <button className="btn btn-primary">feedback </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
