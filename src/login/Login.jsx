import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <section className="h-[100vh] flex justify-center items-center">
        <div className="login-container">
          <form className="login-form">
            <h1>Welcome Back</h1>
            <p>Please login to your account</p>
            <div className="input-group">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <button className="btn" type="submit">
              Login
            </button>
            <div className="bottom-text">
              <p>
                Don have an account? <a href="#">Sign Up</a>
              </p>
              <div>
                 <Link to={"/"}>Back to Home</Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
