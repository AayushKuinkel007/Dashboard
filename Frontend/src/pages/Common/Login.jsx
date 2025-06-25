import React, { useEffect, useState } from "react";
import LoadingComponent from "../../component/Common/Dashboard/LoadingComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API } from "../../utils/ApiRoute";
import { useAuth } from "../../auth/Authcontext";

const Login = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { setAuth } = useAuth(); // 👈 use context to set user & token

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
      return;
    }

    try {
      const response = await axios.post(`${API}users/login`, formData);

      const { token } = response.data;

      const user = { email: formData.email };
      only;

      setAuth({ user, token });
      localStorage.setItem("auth", JSON.stringify({ user, token }));

      toast.success("Login Successful!", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });

      setTimeout(() => {
        navigate("/user");
      }, 2000);
    } catch (err) {
      const msg =
        err.response?.data?.message ||
        err.response?.data?.error ||
        "Login failed. Please try again.";
      toast.error(msg, {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };

  return (
    <>
      <ToastContainer />
      {loading ? (
        <LoadingComponent />
      ) : (
        <div className="container">
          <div className="row mt-3">
            <h3 className="text-center">Login</h3>
            <div className="col-md-6 offset-md-3">
              <form
                className="border border-black rounded p-3"
                onSubmit={handleSubmit}
              >
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="form-control mb-2"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="form-control mb-2"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-lg btn-primary">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
