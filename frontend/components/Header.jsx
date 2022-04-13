import { useState, useEffect } from "react";
import Link from "next/link";
import { useUser } from "../hooks/useUser";

import Navbar from "./Navbar";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

import { IoExitOutline } from "react-icons/io5";

export default function Header() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const [user, setUser] = useUser();

  useEffect(() => {
    if (
      sessionStorage.getItem("token") &&
      sessionStorage.getItem("user_name")
    ) {
      setUser({ name: sessionStorage.getItem("user_name"), isLoggedIn: true });
    }
  });

  return (
    <header className="flex justify-between items-center">
      <h1 className="font-poppins text-2xl font-medium text-primary">
        <Link href="/">GetBetter</Link>
      </h1>
      <Navbar />
      <div className="flex">
        {user.isLoggedIn ? (
          <div className="flex item-center">
            <p className="mx-4 p-1 font-poppins font-medium text-gray-800 border-b-2 border-transparent  hover:border-b-2 hover:border-primary transition-all">
              <Link href="/appointments">My Appointments</Link>
            </p>
            <button
              className="flex items-center mx-4 p-1 font-poppins font-medium text-gray-800 border-b-2 border-transparent  hover:border-b-2 hover:border-primary transition-all"
              onClick={() => {
                setUser({
                  id: "",
                  name: "",
                  email: "",
                  isLoggedIn: null,
                });
                sessionStorage.removeItem("token");
              }}
            >
              <p className="px-2">{user.name}</p>
              <IoExitOutline className="text-2xl" />
            </button>
          </div>
        ) : (
          <>
            <button
              className="w-28 mx-2 rounded-full font-poppins font-medium text-primary border-2 border-primary shadow py-2 px-4"
              onClick={() => setShowLoginModal(true)}
            >
              Log in
            </button>
            <LoginModal
              visible={showLoginModal}
              onClose={() => setShowLoginModal(false)}
              onLinkClicked={() => {
                setShowLoginModal(false);
                setShowSignupModal(true);
              }}
            />
            <button
              className="w-28 mx-2 rounded-full font-poppins font-medium bg-primary text-gray-100 shadow py-2 px-4"
              onClick={() => setShowSignupModal(true)}
            >
              Sign up
            </button>
            <SignupModal
              visible={showSignupModal}
              onClose={() => setShowSignupModal(false)}
              onLinkClicked={() => {
                setShowSignupModal(false);
                setShowLoginModal(true);
              }}
            />
          </>
        )}
      </div>
    </header>
  );
}
