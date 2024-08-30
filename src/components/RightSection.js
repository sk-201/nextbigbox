import React from "react";
import Card from "./Card";

const RightSection = ({ cardLength }) => {
  return (
    <div className="  h-screen w-1/2 mt-5 text-center   ">
      <button className="bg-gray-100 text-3xl w-48">
        <div className="flex justify-center items-center">
          <p>TEST</p>
          <span className="ml-4">
            <img src="/pencil.png" alt="edit" width={20} height={20} />
          </span>
        </div>
      </button>
      {cardLength.map((card) => {
        return <Card />;
      })}
    </div>
  );
};

export default RightSection;
