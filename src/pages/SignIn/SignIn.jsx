import Lottie from "lottie-react";
import { useContext } from "react";
import Swal from "sweetalert2";
import SignInAnimation from "../../assets/lotties/login.json";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

const SignIn = () => {
  const { setUser, handleSignInWithGoogle, userSignIn } =
    useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    // showing loading sweetalert for creating account
    Swal.fire({
      title: "Login...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    const email = e.target.email.value;
    const password = e.target.password.value;

    // sign up using firebase
    userSignIn(email, password)
      .then((userData) => {
        setUser(userData.user);
        Swal.close();
      })
      .catch((err) => {
        Swal.close();
        Swal.fire({
          icon: "error",
          text: `${err.code}`,
        });
      });
  };

  const handleSignInUsingGooglePopUp = () => {
    handleSignInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((err) => {
        console.log(err.code);
      });
  };
  return (
    <div className=" dark:bg-gray-800 dark:text-gray-100">
      <div className=" w-[95%] lg:w-[50%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 py-10 lg:py-12">
        <div className="lg:block hidden">
          <Lottie animationData={SignInAnimation} loop={true} />
        </div>
        <div>
          <h2 className="text-3xl font-medium mb-5 ">Login Now!</h2>
          <div>
            <button
              onClick={handleSignInUsingGooglePopUp}
              className="border-2 border-black w-full text-center inline-block py-2 rounded-sm font-medium cursor-pointer dark:border-white dark:bg-white dark:text-black"
            >
              Sign Up Using Google
            </button>
          </div>
          <div className="divider mt-8">OR</div>
          <form onSubmit={handleRegister} className="fieldset">
            <label className="label text-black text-lg font-semibold mb-1 dark:text-gray-100">
              Email
            </label>
            <input
              type="email"
              className="input dark:text-black w-full"
              placeholder="Email"
              name="email"
            />
            <label className="label text-black text-lg font-semibold mb-1 mt-2 dark:text-gray-100">
              Password
            </label>
            <input
              type="password"
              className="input dark:text-black w-full"
              placeholder="Password"
              name="password"
            />

            <button className="btn btn-neutral mt-4 dark:bg-white dark:text-black">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
