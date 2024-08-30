import React, { useState } from "react";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";

function App() {
  const [cardLength, setCardLength] = useState([]);

  const defaultAddon = {
    id: cardLength.length + 1,
    type: "User Instruction",
    details: "",
  };

  const handleAddCard = () => {
    setCardLength((prevAddOns) => [...prevAddOns, defaultAddon]);
  };
  return (
    <div>
      <p className="text-3xl text-center border border-b-1 bprfer-gray-200">
        Update Workflow
      </p>
      <div className="flex justify-between items-center">
        <LeftSection handleAddCard={handleAddCard} />
        <RightSection cardLength={cardLength} />
      </div>
    </div>
  );
}

export default App;
