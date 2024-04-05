// import React from 'react'

import Profile from "./Profile";

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between !h-12 !px-5 bg-blue-500">
        <div className="font-extrabold text-2xl"> VeriFi </div>
        <Profile />
      </header>
    </>
  );
}
