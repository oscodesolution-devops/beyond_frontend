import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false); // Admin status ko track karne ke liye
  const [loading, setLoading] = useState(true); // Loading state to wait until the verification is done
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await axios.post(
          "http://localhost:4000/api/auth/userAndadmin",
          { token: token },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Admin Check Response:", response.data);

        if (response.data.isAdmin) {
          setIsAdmin(true);
        } else {
          navigate("/profile");
        }
      } catch (error) {
        console.error("Error verifying token:", error);
        navigate("/login"); // Error agar aata hai toh login page pe redirect karo
      } finally {
        setLoading(false); // Verification ke baad loading ko false kar do
      }
    };

    verifyToken();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>; // Token verification ke dauran loading dikhayein
  }

  if (!isAdmin) {
    return <Navigate to="/unauthorized" />; // Agar admin nahi hai toh unauthorized page pe redirect karenge
  }

  return children; // Agar admin hai toh protected content render karo
};

export default ProtectedRoute;
