import React, { useState } from 'react';

const Description= () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };

  return (
      <section onClick={toggleDescription} className="text-white text-center cursor-pointer">
        <h1
           className=" text-3xl bg-[#EA1179] gap-8 "
        >
            What We Offer
        </h1>
        <p className={`text-justify mt-4 ${isOpen ? "block" : "hidden" }`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cipdatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
  );
};

export default Description;