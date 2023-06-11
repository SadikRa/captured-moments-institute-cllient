import axios from "axios";
import { useContext, useEffect, useState } from "react";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  //   console.log("user Classes", Classes);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_URL}/sixClasses`);
        setClasses(res.data.slice(0, 6));
        // console.log('res data', res.data)
      } catch (error) {
        console.error("Error fetching Classes:", error);
      }
    };

    fetchClasses();
  }, []);

  // eslint-disable-next-line no-unused-vars
  const handleAddToClass = (classItem) => {
    if (user && user.email) {
      // eslint-disable-next-line no-undef
      const saveClass = {
        // eslint-disable-next-line no-undef
        className: classItem.className,
        // eslint-disable-next-line no-undef
        imageUrl: classItem.imageUrl,
        // eslint-disable-next-line no-undef
        instructorName: classItem.instructorName,
        // eslint-disable-next-line no-undef
        price: classItem.price,
        // eslint-disable-next-line no-undef
        seats: classItem.seats,
        email: user.email,
      };

      fetch(`${import.meta.env.VITE_URL}/addClass`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveClass),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Class added Now.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to add Class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="my-16 ">
      <h2 className="text-4xl text-center font-semibold">
        Our Top Six Classes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12 py-10">
        {classes.map((classItem) => (
          <div key={classItem._id}>
            <div className="card w-96 bg-base-100 shadow-xl hover:bg-blue-200">
              <figure className="px-10 pt-10">
                <img
                  src={classItem.imageUrl}
                  alt="classes"
                  className="rounded-xl w-72 h-72"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">
                  Class Name: {classItem.className}
                </h2>
                <p>Instructor Name: {classItem.instructorName}</p>
                <p>Available Seats: {classItem.seats}</p>
                <p>Price: {classItem.price}</p>
                <div className="card-actions">
                  <button
                    onClick={() => {
                      handleAddToClass(classItem);
                    }}
                    disabled={isAdmin || isInstructor}
                    className="btn btn-primary"
                  >
                    Select Class
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
