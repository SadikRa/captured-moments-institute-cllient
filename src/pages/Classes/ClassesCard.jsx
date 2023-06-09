import { useEffect, useState } from "react";

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

  return (
    <div>
      <div className={
        parseFloat(seats) === 0 ? 'card w-96 bg-red-500 shadow-xl ' : 'card w-96 bg-base-100 shadow-xl hover:bg-white'
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
              disabled={disable}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
