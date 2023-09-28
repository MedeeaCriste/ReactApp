import React from 'react'

export default function FooterContact() {
  return (
    <div>
    <h1
      id="contact"
      className="text-3xl font-bold mb-[20px] text-white"
    >
      Contact
    </h1>
    <form
      className="flex flex-col justify-center items-center  gap-6 text-white outline-none"
      action="https://getform.io/f/426ff5ee-9cbc-461f-bfab-dfcfcc071997"
      method="POST"
      encType="multpart/form-data"
    >
      <label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border-2 bg-blue-600 border-white w-[260px]  border-t-blue-600 border-r-blue-600 border-l-blue-600 outline-none"
        />
      </label>
      <label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border-2 bg-blue-600 border-white w-[260px]  border-t-blue-600 border-r-blue-600 border-l-blue-600 outline-none"
        />
      </label>
      <label htmlFor="description" className="text-black">
        <textarea
          type="description"
          name="description"
          placeholder="Descripton"
          className="  border-2  bg-white w-[260px] p-1 outline-none"
        />
      </label>
      <button
        type="submit"
        value="Submit"
        className=" rounded-sm text-blue-900 bg-white font-bold p-2 w-[260px] text-xl hover:bg-blue-900 hover:text-white transition-all duration-200"
      >
        Send Details
      </button>
    </form>
  </div>
  )
}
