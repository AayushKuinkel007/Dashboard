import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API } from "../../utils/ApiRoute";
import LoadingComponent from "../../component/Common/Dashboard/LoadingComponent";
import Navbar from "../../component/Common/Navbar";

const Signup = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    dateofbirth: "",
    email: "",
    password: "",
    role: "",
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

    if (!formData.role) {
      toast.error("Please select a role.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        theme: "colored",
      });
      return;
    }

    try {
      console.log("Form submitted:", formData);

      const response = await axios.post(`${API}signup/senduserdata`, formData);

      toast.success("Signup Successful!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        theme: "colored",
      });

      setFormData({
        fname: "",
        lname: "",
        dateofbirth: "",
        email: "",
        password: "",
        role: "",
      });

      console.log("Signup Successful", response);
    } catch (err) {
      console.error("Signup Failed", err);
      toast.error("Signup Failed. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        theme: "colored",
      });
    }
  };

  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        <>
          <Navbar />
          <div className="container">
            <ToastContainer />
            <div className="row mt-3">
              <h3 className="text-center">Signup</h3>
              <div className="col-md-6 offset-md-3">
                <form className="border border-black rounded p-3" onSubmit={handleSubmit}>
                  <div className="d-flex">
                    <input
                      type="text"
                      name="fname"
                      placeholder="First Name"
                      className="form-control mb-2"
                      value={formData.fname}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      name="lname"
                      placeholder="Last Name"
                      className="form-control mb-2 ms-2"
                      value={formData.lname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <input
                    type="date"
                    name="dateofbirth"
                    className="form-control mb-2"
                    value={formData.dateofbirth}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control mb-2"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control mb-2"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <select
                    name="role"
                    className="form-select mb-3"
                    value={formData.role}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      -- Select Role --
                    </option>
                    <option value="user">User</option>
                    <option value="seller">Seller</option>
                  </select>

                  <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-lg btn-primary">
                      Signup
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Signup;
