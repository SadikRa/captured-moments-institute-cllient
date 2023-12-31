import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  // console.log("user Instructors", instructors);

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_URL}/users/instructor`
        );
        setInstructors(res.data);
        // console.log('res data', res.data)
      } catch (error) {
        console.error("Error fetching instructors:", error);
      }
    };

    fetchInstructors();
  }, []);

  return (
    <div className="py-24">
       <Helmet>
        <title>Captured Moments Institute || instructor</title>
      </Helmet>
      <h2 className="text-3xl text-center font-semibold my-5">
        Our All Instructors
      </h2>
      <div className="grid grid-cols-1 py-10 md:grid-cols-3 lg:grid-cols-3 gap-8 ">
        {instructors.map((instructor) => (
          <>
            <div
              key={instructor._id}
              className="card w-96 bg-base-100 shadow-xl"
            >
              <figure>
                <img
                  className="w-72 h-72"
                  src={instructor?.photo}
                  alt="instructor photo"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Name: {instructor.name}</h2>
                <p>Email: {instructor.email}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
