import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <div className="flex justify-center items-center h-screen">
      <Helmet>
        <title>Captured Moments Institute || Register</title>
      </Helmet>
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          Please Registration
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white text-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-white text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              {...register("name", { required: true, maxLength: 80 })}
            />
          </div>
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
                pattern: /^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/,
              })}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-white text-sm font-bold mb-2"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm password"
              className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              {...register("confirmPassword", {
                required: true,
                minLength: 6,
                pattern: /^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/,
                validate: (value) => value === password,
              })}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={!password}
          >
            Register
          </button>
        </form>
        <p>
          Already Have An Account{" "}
          <Link className="text-green-400" to={"/login"}>
            please Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
