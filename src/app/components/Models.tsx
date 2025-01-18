import React from "react";
import Card from "./Card";
const Models = () => {
  return (
    <div className="py-4">
      <h1 className="text-4xl text-center font-bold mb-8 md:text-5xl lg:text-6xl">
        Modelos
      </h1>
      <div
        className="  
          grid grid-cols-2 gap-1 px-1
          mx-auto max-w-screen-xl 
          "
      >
        <Card src="/modelos/female1.jpg" alt="female1" />
        <Card src="/modelos/female2.jpg" alt="female1" />
        <Card src="/modelos/male1.jpg" alt="female1" />
        <Card src="/modelos/male2.jpg" alt="female1" />
      </div>
    </div>
  );
};

export default Models;
