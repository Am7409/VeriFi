import React from 'react'
import { useDispatch } from "react-redux";
import { setLoggedIn } from '../store/LoginSlice';

export default function Logout() {
    const dispatch = useDispatch();
    async function handleLogout(e: React.FormEvent) {
      e.preventDefault();
      dispatch(setLoggedIn(true));
      localStorage.removeItem("loggedIn");
    }
  return (
    <>
    <button
        onClick={handleLogout}
        className="bg-blue-400 text-white rounded-md px-3 py-2 hover:bg-blue-500 cursor-pointer"
      >
        Log Out
      </button>
    </>
  )
}
