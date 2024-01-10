import { Elsie_Swash_Caps } from "next/font/google";
import Image from "next/image";
import { Router, useRouter } from "next/router";
import React from "react";

import { useState } from "react";
const Signup = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setphone] = useState("");
  const router = useRouter();
  async function handlesignup() {
    let body = JSON.stringify({
      name,
      email,
      password,
      phone: parseInt(phone),
      role: "admin",
    });

    let res = await fetch("https://pgrkam2.onrender.com/api/v1/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });
    res = await res.json();
    // res = await res.data;
    if (res.success) {
      router.push("/signin");
    } else {
      alert(res.error);
    }
  }
  return (
    <div className="flex flex-col gap-3 w-full h-screen  items-center bg-gradient-to-b from-white to-bgyellow ">
      <Image src={"/plogo.png"} className="mt-24" height={100} width={100} />
      <div className="text-3xl ">Sign Up</div>
      <div>Welcome Back!</div>
      <div className="py-5 my-10">
        <input
          value={name}
          onChange={(e) => setname(e.target.value)}
          type="text"
          class="bg-inherit border-b-2 border-gray-400 w-full p-3 rounded mb-4"
          name="email"
          placeholder="Name"
        />
        <input
          value={email}
          onChange={(e) => setemail(e.target.value)}
          type="text"
          class="bg-inherit border-b-2 border-gray-400 w-full p-3 rounded mb-4"
          name="email"
          placeholder="Email"
        />
        <input
          value={phone}
          onChange={(e) => setphone(e.target.value)}
          type="text"
          class="bg-inherit border-b-2 border-gray-400 w-full p-3 rounded mb-4"
          name="email"
          placeholder="Phone Number"
        />

        <input
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          type="password"
          class="bg-inherit border-b-2 border-gray-400 w-full p-3 rounded mb-4"
          name="password"
          placeholder="Password"
        />
      </div>
      <button
        onClick={handlesignup}
        type=""
        className="bg-logogreen px-8 py-2 text-lg text-white rounded-lg"
      >
        Sign Up
      </button>
    </div>
  );
};

export default Signup;
