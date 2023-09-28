import React from 'react'

export default function Yourcdetails() {
    function afiseazaData() {
        var name = document.getElementById("name").value;
    
        var phone = document.getElementById("phone").value;
        var email = document.getElementById("email").value;
    
        var mesaj = "Name: " + name + "\n";
        mesaj += "Phone: " + phone + "\n";
        mesaj += "Email: " + email;
    
        alert(mesaj);
      }
  return (
<div className="flex flex-col justify-center items-center gap-8">
          <h1 className="text-3xl text-blue-900 font-semibold text-center">
            Your Contact details
          </h1>

          <div>
            <form className="flex flex-col justify-end items-center gap-7 text-base text-[#d3d3d3] outline-none">
              <label>
                <input
                placeholder='Name'
                  id="name"
                  type="text"
                  name="name"
                  className="border-2 border-[#d3d3d3] border-t-white border-r-white border-l-white outline-none"
                />
              </label>
              <label>
                
                <input
                placeholder='Email'
                  id="email"
                  type="email"
                  name="email"
                  className="border-2 border-[#d3d3d3] border-t-white border-r-white border-l-white outline-none"
                />
              </label>
              <label>
                
                <input
                placeholder='Phone'
                  id="phone"
                  type="number"
                  name="phone"
                  className="border-2 border-[#d3d3d3] border-t-white border-r-white border-l-white outline-none"
                />
              </label>
              <label htmlFor="description">
                <textarea
                  type="description"
                  name="description"
                  placeholder="Descripton"
                  className="border-2 border-[#d3d3d3] w-[200px] bg-[#d3d3d3] p-1 text-black"
                />
              </label>
              <button
                type="submit"
                value="Submit"
                className=" border-2 rounded-sm border-[#EA1179] hover:bg-[#EA1179] hover:text-white  p-2 w-[200px] text-base text-blue-900 font-bold transition-all duration-200"
                onClick={afiseazaData}
              >
                Send Details
              </button>
            </form>
          </div>
        </div>  )
}
