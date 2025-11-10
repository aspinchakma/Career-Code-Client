import Lottie from "lottie-react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import RegisterAnimation from "./../../assets/lotties/register.json";
const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };

  const { name, age } = useContext(AuthContext);
  console.log(name, age);

  return (
    <div className=" w-[95%] lg:w-[50%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 my-10 lg:my-12">
      <div className="lg:block hidden">
        <Lottie animationData={RegisterAnimation} loop={true} />
      </div>
      <div>
        <h2>Register Now!</h2>
        <form onSubmit={handleRegister} className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            name="email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            name="password"
          />

          <button className="btn btn-neutral mt-4">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
