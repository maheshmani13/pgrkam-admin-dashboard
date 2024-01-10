import Image from "next/image";
import { Router, useRouter } from "next/router";
import React from "react";

import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/userState";
const Signin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const setuserstate = useSetRecoilState(userState);
  const router = useRouter();
  async function handlesignin() {
    let res = await fetch("https://pgrkam2.onrender.com/api/v1/user/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    res = await res.json();
    if (res.success) {
      localStorage.setItem("token", res.data);
      setuserstate({
        userName: email,
      });
      router.push("/user");
    }
  }
  return (
    <div className="flex flex-col gap-3 w-full h-screen  items-center bg-gradient-to-b from-white to-bgyellow ">
      <Image src={"/plogo.png"} className="mt-32" height={100} width={100} />
      <div className="text-3xl ">Sign In</div>
      <div>Welcome Back!</div>
      <div className="py-5 my-10">
        <input
          value={email}
          onChange={(e) => setemail(e.target.value)}
          type="text"
          class="bg-inherit border-b-2 border-gray-400 w-full p-3 rounded mb-4"
          name="email"
          placeholder="Email"
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
        onClick={handlesignin}
        type=""
        className="bg-logogreen px-8 py-2 text-lg text-white rounded-lg"
      >
        Sign In
      </button>
    </div>
  );
};

export default Signin;
