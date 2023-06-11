import { useContext, useEffect, useState } from "react";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ClassesCard = ({ classItem }) => {
  // eslint-disable-next-line react/prop-types
  const { className, imageUrl, instructorName, price, seats } = classItem;
  const [disable, setDisable] = useState(false);
  const {user} = useContext(AuthContext)
  const navigate = useNavigate();
    const location = useLocation();

  useEffect(() => {
    if (parseFloat(seats) === 0) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [seats]);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor()

  // eslint-disable-next-line no-unused-vars
  const handleAddToClass = (classItem) =>{

    if(user && user.email){
      const saveClass = { className, imageUrl, instructorName, price, seats, email: user.email } 
      
      fetch(`${import.meta.env.VITE_URL}/addClass`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(saveClass)
    })
    .then(res => res.json())
    .then(data => {
        if(data.insertedId){
            
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Class added Now.',
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
    }
    else{
      Swal.fire({
          title: 'Please login to add Class',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Login now!'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', {state: {from: location}})
          }
        })
  }

  }

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
            onClick={() =>{
              handleAddToClass(classItem)
            }}
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
