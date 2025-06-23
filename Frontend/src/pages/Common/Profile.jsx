import React, { useEffect, useState } from "react";
import LoadingComponent from "../../component/Common/Dashboard/LoadingComponent";
import reactsvg from '../../assets/react.svg'
import { Link } from "react-router-dom";
const Profile = () => {
  const [loading, setLoading] = useState(true); // ✅ Fix here

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <>
          <LoadingComponent />
        </>
      ) : (
        <>
          <div className="container">
              <div className="d-flex justify-content-center">
                <div className="card w-25 mt-3" style={{ width: "18rem;" }}>
                  <div className="d-flex justify-content-center">
                  <img src={reactsvg} className="card-img-top bg-dark rounded-circle" alt="..." style={{height:'15vh',width:'15vh'}} />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-center">User Name</h5>
                    <div className="d-flex justify-content-center mt-3">
                      <Link className="btn btn-success btn-lg" style={{height:'15vh',width:'50%'}} >Edit Profile</Link>
                      <Link to='/dashboard' className="btn btn-primary btn-lg ms-3" style={{height:'15vh',width:'50%'}} >
                        Account Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
