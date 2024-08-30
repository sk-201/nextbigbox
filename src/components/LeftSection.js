import React, { useState } from "react";
import Attributes from "./Attributes";
import AddOns from "./AddOns";
import Rules from "./Rules";
import Preview from "./Preview";

const LeftSection = ({ handleAddCard }) => {
  const [defaultTab, setDefaultTab] = useState("add-actions");
  const [subTab, setSubTab] = useState("attributes");
  const [showStep, setShowStep] = useState(false);
  const handleDefaultTab = (name) => {
    if (name === "add-actions") {
      setDefaultTab("add-actions");
    } else {
      setDefaultTab("validation");
    }
  };
  const handleSubTab = (name) => {
    if (name === "attributes") {
      setSubTab("attributes");
    } else if (name === "add") {
      setSubTab("add");
    } else if (name === "rules") {
      setSubTab("rules");
    } else {
      setSubTab("preview");
    }
  };
  const activeClass =
    "text-blue-600 bg-gray-100 rounded-t-lg active inline-block p-4 rounded-t-lg hover:text-gray-600  hover:bg-gray-50";
  const defaultClass =
    "inline-block p-4 rounded-t-lg hover:text-gray-600  hover:bg-gray-50   ";
  return (
    <div className="pt-10 px-10 h-screen">
      {/* Tabs */}
      <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <li class="me-2" onClick={() => handleDefaultTab("add-actions")}>
          <a
            href="#"
            aria-current="page"
            class={defaultTab === "add-actions" ? activeClass : defaultClass}
          >
            Add Actions
          </a>
        </li>
        <li class="me-2" onClick={() => handleDefaultTab("validation")}>
          <a
            href="#"
            class={defaultTab === "validation" ? activeClass : defaultClass}
          >
            Add Additional Validation
          </a>
        </li>
      </ul>
      {showStep === true ? (
        <form class=" mx-auto mt-5">
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Add Step
          </label>
          <select
            id="front"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={() => {
              setShowStep(false);
              setDefaultTab("add-actions");
              setSubTab("attributes");
            }}
          >
            <option selected>Select Step</option>
            <option>Aadhar</option>
            <option>Digilocker</option>
            <option>Name</option>
            <option>Image</option>
            <option>Live Selfie</option>
          </select>
        </form>
      ) : (
        <div className="border border-1 border-gray-200 p-5 mt-5 h-auto">
          <ul class="flex  mt-2 flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <li class="me-2" onClick={() => handleSubTab("attributes")}>
              <a
                href="#"
                aria-current="page"
                class={subTab === "attributes" ? activeClass : defaultClass}
              >
                Attributes
              </a>
            </li>
            <li class="me-2" onClick={() => handleSubTab("add")}>
              <a href="#" class={subTab === "add" ? activeClass : defaultClass}>
                Addonns
              </a>
            </li>
            <li class="me-2" onClick={() => handleSubTab("rules")}>
              <a
                href="#"
                class={subTab === "rules" ? activeClass : defaultClass}
              >
                Rules
              </a>
            </li>
            <li class="me-2" onClick={() => handleSubTab("preview")}>
              <a
                href="#"
                class={subTab === "preview" ? activeClass : defaultClass}
              >
                Preview&Add
              </a>
            </li>
          </ul>
          {subTab === "attributes" ? (
            <Attributes />
          ) : subTab === "add" ? (
            <AddOns handleSubTab={handleSubTab} />
          ) : subTab === "rules" ? (
            <div>
              <Rules />
              <div
                className="text-right "
                onClick={() => handleSubTab("preview")}
              >
                <button
                  type="button"
                  class="text-white mt-5 w-48 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Next
                </button>
              </div>
            </div>
          ) : subTab === "preview" ? (
            <div>
              <Preview />
              <div
                className="text-right "
                onClick={() => {
                  setShowStep(true);
                  handleAddCard();
                }}
              >
                <button
                  type="button"
                  class="text-white mt-5 w-48 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Add Step
                </button>
              </div>
            </div>
          ) : null}
        </div>
      )}
      {subTab === "attributes" ? (
        <div className="text-right " onClick={() => handleSubTab("add")}>
          <button
            type="button"
            class="text-white mt-5 w-48 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Next
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default LeftSection;
