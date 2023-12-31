import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";


const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
 

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const MakeAdmin = user =>{
    fetch(`${import.meta.env.VITE_URL}/users/admin/${user._id}`, {
        method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount){
            refetch();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is an Admin Now!`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
}

const MakeInstructor = (user) =>{
    fetch(`${import.meta.env.VITE_URL}/users/instructor/${user._id}`, {
        method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount){
            refetch();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is an Instructor Now!`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
}

  return (
    <div>
      <Helmet>
        <title>Captured Moments Institute | Manage Users</title>
      </Helmet>

      <h2 className="text-4xl text-center">Total users: {users.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Admin</th>
              <th>Instructor</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  {user.role === "admin" || user.role === "instructor"  ? (
                    <button className="btn" disabled="disabled">Make Admin</button>
                  ) : (
                    <button
                      onClick={() => MakeAdmin(user)}
                      className="btn btn-primary"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  {user.role === "instructor" || user.role === "admin" ? (
                    <button className="btn" disabled="disabled">Make Instructor</button>
                  ) : (
                    <button
                      onClick={() => MakeInstructor(user)}
                      className="btn btn-primary"
                    >
                      Make Instructor
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
