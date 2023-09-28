import React from "react";

export default function Navbar() {
  return (
    <nav className="flex flex-col   justify-center items-center bg-[url('/public/bg2.jpg')]  bg-cover h-[480px] pb-[80px] ">
      <img className="w-[300px] " src="/logo.png" />
      <div className="flex justify-center px-24 py-3 items-center gap-[40px] text-xl font-semibold bg-white rounded-sm p-1 ">
        <a href="#aboutus" className="text-blue-900 scroll-smooth">
          About us
        </a>
        <a href="#fileupload">File upload</a>
        <a>What we offer</a>
        <a>Rate us</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
