import React, { useEffect, useState } from "react";
import LoadingComponent from "../../component/Common/LoadingComponent";

const Homepage = () => {
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
        <></>
      )}
      <div>Homepage</div>
    </>
  );
};

export default Homepage;
