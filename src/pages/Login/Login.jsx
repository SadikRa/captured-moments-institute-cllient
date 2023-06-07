import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <div className="flex justify-center mt-10 items-center">
      <Helmet>
        <title>Captured Moments Institute || Login</title>
      </Helmet>
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Please login</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white text-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-white text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              {...register("password", {
                required: true,
                minLength: 6,
              })}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
        </form>
        <p>
          Do not have an account?
          <Link className="text-green-400" to={"/register"}>
           Please Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;