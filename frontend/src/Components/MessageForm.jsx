import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const MessageForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");


  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/message/send",
        { firstName, lastName, email, phone, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
  
      if (response && response.data) {
        toast.success(response.data.message);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        toast.error("Unexpected response format");
      }
    } catch (error) {
      console.error("Error details:", error);
      
      if (error.response) {
        console.error("Error Response Data:", error.response.data);
        console.error("Error Response Status:", error.response.status);
        console.error("Error Response Headers:", error.response.headers);
        toast.error(error.response.data.message || "An error occurred");
      } else if (error.request) {
        console.error("Error Request Data:", error.request);
        toast.error("No response received from the server");
      } else {
        console.error("Error Message:", error.message);
        console.error("Error Config:", error.config);
        toast.error("Error setting up the request");
      }
    }
  };
  


  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-800">Send Us A Message</h2>
      <form onSubmit={handleMessage} className="bg-white p-8 rounded-lg shadow-lg max-w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300 w-full"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300 w-full"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300 w-full"
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300 w-full"
          />
        </div>
        <textarea
          rows={6}
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300 mb-6"
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageForm;
