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
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import Payment from "../pages/Dashboard/Dashboard/Payment/Payment";

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
          element: <PrivateRoute><Instructors></Instructors></PrivateRoute>
        },
        {
          path:'classes' ,
          element: <PrivateRoute><Classes></Classes></PrivateRoute>
        },
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path:'manageClass',
          element:<AdminRoute><ManageClasses></ManageClasses></AdminRoute>
        },
        {
          path:'manageUser',
          element:<AdminRoute><ManageUsers></ManageUsers></AdminRoute>
        },
        {
          path: 'addClass',
          element: <InstructorRoute><AddAClass></AddAClass></InstructorRoute>
        },
        {
          path: 'myClasses',
          element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
        },
        {
          path: 'myEnrolledClasses',
          element: <PrivateRoute><MyEnrolledClasses></MyEnrolledClasses></PrivateRoute>
        },
        {
          path: 'paymentHistory',
          element: <PrivateRoute> <PaymentHistory></PaymentHistory></PrivateRoute>
        },
        {
          path: 'myClass',
          element: <PrivateRoute><MyClass></MyClass></PrivateRoute>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        }
      ]
    }
  ]);


  export default router