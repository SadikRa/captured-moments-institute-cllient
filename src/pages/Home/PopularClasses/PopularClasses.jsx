import axios from "axios";
import { useEffect, useState } from "react";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";


const PopularClasses = () => {

    const [classes, setClasses] = useState([]);
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor()
    //   console.log("user Classes", Classes);
    
      useEffect(() => {
        const fetchClasses = async () => {
          try {
            const res = await axios.get(
              `${import.meta.env.VITE_URL}/sixClasses`
            );
            setClasses(res.data.slice(0, 6));
            // console.log('res data', res.data)
          } catch (error) {
            console.error("Error fetching Classes:", error);
          }
        };
    
        fetchClasses();
      }, []);
    
    
    return (
        <div className="my-16 ">
            <h2 className="text-4xl text-center font-semibold">Our Top Six Classes</h2>
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
              <h2 className="card-title">Class Name: {classItem.className}</h2>
              <p>Instructor Name: {classItem.instructorName}</p>
              <p>Available Seats: {classItem.seats}</p>
              <p>Price: {classItem.price}</p>
              <div className="card-actions">
                <button
                  disabled={ isAdmin || isInstructor}
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