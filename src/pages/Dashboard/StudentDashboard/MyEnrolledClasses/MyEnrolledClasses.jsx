import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const MyEnrolledClasses = () => {

    const { user } = useContext(AuthContext);
    
    const [enrolled, setEnrolled] = useState([]);
  
    useEffect(() => {
      fetch(`${import.meta.env.VITE_URL}/history/${user?.email}`)
        .then((res) => res.json())
        .then((data) => setEnrolled(data));
    }, [user]);
  
    return (
        <div className="w-full">
           <Helmet>
        <title>Captured Moments Institute || enrolled class</title>
      </Helmet>
            <h1>My Enrolled Classes</h1>
            <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Enrolled Date</th>
              <th>My Enrolled Class Names</th>
            </tr>
          </thead>
          <tbody>
            {enrolled.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.date}</td>
                <td>
                  <ul>
                    {item.ClassNames.map((name, index) => (
                      <li key={index}>{name}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default MyEnrolledClasses;