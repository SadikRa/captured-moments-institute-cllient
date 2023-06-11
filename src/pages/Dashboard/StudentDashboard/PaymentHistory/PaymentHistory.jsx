import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_URL}/history/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setHistory(data));
  }, [user]);

  return (
    <div className="w-full">
      <h2 className="text-4xl text-center">My Payment History List</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Transaction ID</th>
              <th>Price</th>
              <th>Date</th>
              <th>Class Names</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.transactionId}</td>
                <td>{item.price} $</td>
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

export default PaymentHistory;
