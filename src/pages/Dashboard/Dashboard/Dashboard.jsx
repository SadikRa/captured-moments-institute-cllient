import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from 'react-icons/fa';
const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col items-center justify-center">
     <Outlet></Outlet>

      <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    
    </div> 
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
      <ul className="menu p-4 w-80 h-full bg-blue-500 text-white ">



        <li><NavLink to="/dashboard/manageClass"><FaHome></FaHome>Manage Classes</NavLink></li>
        <li><NavLink to="/dashboard/manageUser"><FaHome></FaHome>Manage Users</NavLink></li>




        <li><NavLink to="/dashboard/addClass"><FaHome></FaHome>Add A Class</NavLink></li>




        <li><NavLink to="/dashboard/myClass"><FaHome></FaHome>My Class</NavLink></li>
        <li><NavLink to="/dashboard/paymentHistory"><FaHome></FaHome>Payment History</NavLink></li>
        <li><NavLink to="/dashboard/myEnrolledClasses"><FaHome></FaHome>My Enrolled Classes</NavLink></li>

        <div className="divider"></div>
        <li><NavLink to="/"><FaHome></FaHome>Home</NavLink> </li>
      </ul>
    
    </div>
  </div>
  );
};

export default Dashboard;

