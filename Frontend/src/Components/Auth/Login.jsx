import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
const Onsubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "http://localhost:5000/api/login",
      formData
    );
    localStorage.setItem("token", response.data.token);
    navigate('/home');
  } catch (error) {
    console.error(error.response?.data?.message || "Login failed");
  }
};

const onChange = (e) => {
  const { name, value } = e.target;
  setformData({
    ...formData,
    [name]: value,
  });
};


  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-slate-900 bg-opacity-80 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Login
        </h2>
        <form onSubmit={Onsubmit}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            className="w-full px-4 py-2 mb-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={onChange}
            className="w-full px-4 py-2 mb-6 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-400">
          Dont have an account?...{" "}
          <Link to="/Signup" className="text-blue-400 hover:text-blue-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
