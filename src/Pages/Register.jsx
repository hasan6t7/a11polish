import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Register = () => {
  const { createUser, updateUser, setUser, logInWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            Swal.fire({
              title: "Register Successfully Done!",
              icon: "success",
              draggable: true,
            });

            navigate("/");
          })
          .catch((error) => {
            toast.error(error.message);
            navigate("/");
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const handleLogInWithGoogle = () => {
    logInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login Successfully Done");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex justify-center my-20 mx-auto">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register</title>
        <link rel="canonical" />
      </Helmet>
      <form onSubmit={handleRegister}>
        <fieldset className="fieldset  border-purple-400 rounded-box w-xs border-1 p-4 shadow-lg">
          <legend className="fieldset-legend font-bold text-purple-700 text-3xl">
            Please Register !
          </legend>
          {/* Name  */}
          <label className="label font-semibold ">Name</label>
          <input
            type="text"
            autoComplete="current-name"
            name="name"
            className="input"
            placeholder="Name"
            required
          />

          {/* name end  */}

          {/* Email start */}
          <label className="label font-semibold">Email</label>
          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
              type="email"
              autoComplete="current-email"
              name="email"
              placeholder="mail@site.com"
              required
            />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>

          {/* Email End  */}

          {/* Photo Url start  */}
          <label className="label font-semibold ">Name</label>
          <input
            type="text"
            autoComplete="current-photo"
            name="photo"
            className="input"
            placeholder="Photo URL"
            required
          />

          {/* Photo url end  */}

          {/* PassWord start  */}
          <label className="label font-semibold">Password</label>
          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              type="password"
              required
              autoComplete="current-password"
              name="password"
              placeholder="Password"
              minLength="6"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
            />
          </label>

          <p className="validator-hint hidden">
            Must be more than 6 characters, including
            <br />
            At least one number <br />
            At least one lowercase letter <br />
            At least one uppercase letter
          </p>
          {/* password end  */}

          <button
            type="submit"
            className="btn btn-neutral bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-800 hover:to-purple-600 text-white border-none hover:bg-purple-600 mt-4"
          >
            Register
          </button>
          <button
            onClick={handleLogInWithGoogle}
            type="button"
            className="btn bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-800 hover:to-purple-600 text-white border-none hover:bg-purple-600 "
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
          <p className="text-center font-semibold">
            Already have an account ?{" "}
            <Link className="text-purple-600 text-sm" to={"/login"}>
              Login
            </Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
