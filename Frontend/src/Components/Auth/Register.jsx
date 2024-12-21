import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


export default function Registration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/register",
        formData,
        { withCredentials: true }
      );

      console.log("Registration successful:", response.data);
      setFormData({
        username: "",
        email: "",
        password: "",
      }); 
      navigate("/login");
    } catch (error) {
      console.error(
        "Error during registration:",
        error.response?.data || error.message
      );
    }
  };


  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-md mx-auto mt-10 p-6 bg-gray-800 rounded-lg shadow-md "
      >
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={onChange}
          className="p-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={onChange}
          className="p-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={onChange}
          className="p-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
        />
        <button
          type="submit"
          className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Register
        </button>
        <Link to="/login">
          <button
            type="button"
            className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 px-28"
          >
            Already have an account
          </button>
        </Link>
      </form>
    </>
  );
}
