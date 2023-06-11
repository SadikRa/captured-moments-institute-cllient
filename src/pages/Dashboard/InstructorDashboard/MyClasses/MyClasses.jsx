import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";

const MyClasses = () => {
  const { user } = useContext(AuthContext);

  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_URL}/classes/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setClasses(data))
      .catch((error) => {
        console.error("Error fetching classes:", error);
      });
  }, [user.email]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {classes.map((classItem) => (
        <div key={classItem._id}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={classItem.imageUrl}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Class Name: {classItem.className}</h2>
              <p>Email: {classItem.email}</p>
              <p>Seats: {classItem.seats}</p>
              <p>Price: {classItem.price}</p>
              <p>Status: {classItem.status}</p>
              {classItem?.feedback ? (
                <p>Feedback: {classItem?.feedback}</p>
              ) : (
                ""
              )}
              <div className="card-actions">
                <button className="btn btn-primary">Update Now</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyClasses;
