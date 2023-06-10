import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const SociaLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = () => {
    googleSignIn()
      .then((result) => {
        const logginUser = result.user;
        // console.log(logginUser);
        const saveUser = {
          name: logginUser.displayName,
          email: logginUser.email,
          photo: logginUser.photoURL,
          role: 'student'
        };

        fetch(`${import.meta.env.VITE_URL}/users`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="text-center">
        <button onClick={handleLogin} className="btn btn-circle btn-outline">
          <FcGoogle />
        </button>
      </div>
    </div>
  );
};

export default SociaLogin;
