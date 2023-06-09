// eslint-disable-next-line react/prop-types
const ClassesCard = ({ classItem }) => {
  // eslint-disable-next-line react/prop-types
  const { className, imageUrl, instructorName, price, seats } =
    classItem;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl hover:bg-white">
        <figure className="px-10 pt-10">
          <img
            src={imageUrl}
            alt='classes'
            className="rounded-xl w-72 h-72"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Class Name: {className}</h2>
          <p>Instructor Name: {instructorName}</p>
          <p>Available Seats: {seats}</p>
          <p>Price: {price}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Select Class</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
