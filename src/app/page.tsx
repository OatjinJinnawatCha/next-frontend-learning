'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';


export default function Page() {
  // config api url
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

  const [apiStatus, setApiStatus] = useState("Checking...");
  const [statusColor, setStatusColor] = useState("text-gray-500");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${apiUrl}/test`);
      console.log("API response: ", response);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (apiStatus === "response") {
      setApiStatus("Working");
      setStatusColor("text-green-500");
    } else {
      setApiStatus("Not Working");
      setStatusColor("text-red-500");
    }
  }, [apiStatus]);

  const handleClick = () => {
    console.log(apiStatus);
  }

  return (
    <div className='px-8 py-4 mx-auto'>
      <h1 className='text-center text-2xl font-bold'>Welcome to the website!</h1>
      <h2>API status: <span className={`${statusColor}`}>{apiStatus}</span></h2>
      <button onClick={() => handleClick()}>Click</button>
    </div>
  )
}