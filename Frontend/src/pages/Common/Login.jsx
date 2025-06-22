import React, { useEffect, useState } from "react";
import LoadingComponent from "../../component/Common/LoadingComponent";

const Login = () => {
  const [loading, setLoading] = useState(true); // ✅ Fix here

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <>
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
