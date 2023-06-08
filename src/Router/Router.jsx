import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import ErrorPage from "../ErrorPage";
import MyEnrolledClasses from "../pages/Dashboard/StudentDashboard/MyEnrolledClasses/MyEnrolledClasses";
import PaymentHistory from "../pages/Dashboard/StudentDashboard/PaymentHistory/PaymentHistory";
import MyClass from "../pages/Dashboard/StudentDashboard/Myclass/MyClass";
import ManageClasses from "../pages/Dashboard/AdminDashboard/ManageClasses/ManageClasses";
import ManageUsers from "../pages/Dashboard/AdminDashboard/ManageUsers/ManageUsers";
import AddAClass from "../pages/Dashboard/InstructorDashboard/AddAClass/AddAClass";
import MyClasses from "../pages/Dashboard/InstructorDashboard/MyClasses/MyClasses";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          path: 'instructors',
          element: <Instructors></Instructors>
        },
        {
          path:'classes' ,
          element: <Classes></Classes>
        },
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path:'manageClass',
          element:<ManageClasses></ManageClasses>
        },
        {
          path:'manageUser',
          element:<ManageUsers></ManageUsers>
        },
        {
          path: 'addClass',
          element: <AddAClass></AddAClass>
        },
        {
          path: 'myClasses',
          element: <MyClasses></MyClasses>
        },
        {
          path: 'myEnrolledClasses',
          element: <MyEnrolledClasses></MyEnrolledClasses>
        },
        {
          path: 'paymentHistory',
          element: <PaymentHistory></PaymentHistory>
        },
        {
          path: 'myClass',
          element: <MyClass></MyClass>
        }
      ]
    }
  ]);


  export default router