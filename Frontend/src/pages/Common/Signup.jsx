import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { API } from "../../utils/ApiRoute";

const Signup = () => {
  const navigate = useNavigate(); // ❗️Fixed: added parentheses to useNavigate()
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    dateofbirth: "",
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
    e.preventDefault(); // ❗️Moved up to prevent accidental refresh

    try {
      console.log("Form submitted:", formData);

      const response = await axios.post(
        `${API}signup/senduserdata`,
        formData
      );

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
      });

      // Optional redirect after successful signup
      // setTimeout(() => navigate("/login"), 3000);

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
    <div className="container">
      <ToastContainer /> {/* ✅ Toast display container */}
      <div className="row mt-3">
        <h3 className="text-center">Signup</h3>
        <div className="col-md-6 offset-md-3">
          <form
            className="border border-black rounded p-3"
            onSubmit={handleSubmit}
          >
            <div className="d-flex">
              <input
                type="text"
                name="fname"
                id="fname"
                placeholder="First Name"
                className="form-control mb-2"
                value={formData.fname}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lname"
                id="lname"
                placeholder="Last Name"
                className="form-control mb-2 ms-2"
                value={formData.lname}
                onChange={handleChange}
              />
            </div>
            <input
              type="date"
              name="dateofbirth"
              id="dateofbirth"
              placeholder="Date of Birth"
              className="form-control mb-2"
              value={formData.dateofbirth}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="form-control mb-2"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="form-control mb-2"
              value={formData.password}
              onChange={handleChange}
            />
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-lg btn-primary">
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
