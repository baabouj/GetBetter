import { useState } from "react";
import Input from "./Input";
import Modal from "./Modal";

import { useUser } from "../hooks/useUser";

import { IoArrowBackOutline } from "react-icons/io5";

export default function SignupModal({ visible, onClose, onLinkClicked }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [_, setUser] = useUser();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:8080/auth/signup", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res = await res.json();
      if (res.success) {
        sessionStorage.setItem("token", res.data.token);
        sessionStorage.setItem("user_name", res.data.name);
        setUser({
          name: res.data.name,
          isLoggedIn: true,
        });
        onClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal visible={visible} onClose={onClose}>
      <form
        onSubmit={onSubmit}
        className="flex flex-col items-center relative p-8 pt-0"
      >
        <div className="flex justify-center items-center self-start">
          <div className="hover:cursor-pointer">
            <IoArrowBackOutline className="w-8 h-8 mr-4" onClick={onClose} />
          </div>
          <h1 className="text-4xl font-poppins font-bold self-start py-8">
            Sign Up
          </h1>
        </div>
        <p className="font-medium pb-4 self-start text-xl font-poppins text-secondary/60">
          Welcome to
          <span className="text-primary"> GetBetter</span>
        </p>
        <div className="flex flex-col z-10">
          <Input
            placeholder="Enter full name"
            type="text"
            onChange={({ target: { value } }) => setName(value)}
          />
          <Input
            placeholder="Enter email address"
            type="email"
            onChange={({ target: { value } }) => setEmail(value)}
          />
          <Input
            placeholder="Enter password"
            type="password"
            onChange={({ target: { value } }) => setPassword(value)}
          />
          <button
            type="submit"
            className="font-medium font-poppins text-gray-100 bg-primary my-4 py-3 px-5 rounded-full"
          >
            Continue
          </button>
          <p className="font-medium text-lg font-poppins text-dark/80 m-4 text-center">
            Already have an account?
            <span
              className="text-primary hover:cursor-pointer mx-1"
              onClick={onLinkClicked}
            >
              Log in
            </span>
          </p>
        </div>
      </form>
    </Modal>
  );
}
