import { useEffect, useState } from "react";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";

// eslint-disable-next-line react/prop-types
const ClassesCard = ({ classItem }) => {
  // eslint-disable-next-line react/prop-types
  const { className, imageUrl, instructorName, price, seats } = classItem;
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    if (parseFloat(seats) === 0) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [seats]);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor()

  return (
    <div>
      <div className={
        parseFloat(seats) === 0 ? 'card w-96 bg-red-500 shadow-xl ' : 'card w-96 bg-base-100 shadow-xl hover:bg-blue-200'
      }>
        <figure className="px-10 pt-10">
          <img src={imageUrl} alt="classes" className="rounded-xl w-72 h-72" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Class Name: {className}</h2>
          <p>Instructor Name: {instructorName}</p>
          <p>Available Seats: {seats}</p>
          <p>Price: {price}</p>
          <div className="card-actions">
            <button
              disabled={disable || isAdmin || isInstructor}
              className="btn btn-primary"
            >
              Select Class
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
