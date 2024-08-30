import React, { useState } from "react";

const AddOns = ({ handleSubTab }) => {
  const [addOns, setAddOns] = useState([]);
  const defaultAddon = {
    id: addOns.length + 1,
    type: "User Instruction",
    details: "",
  };
  const handleAddAddon = () => {
    setAddOns((prevAddOns) => [...prevAddOns, defaultAddon]);
  };
  return (
    <div>
      {addOns.length > 0 ? (
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  #
                </th>
                <th scope="col" class="px-6 py-3">
                  Type
                </th>
                <th scope="col" class="px-6 py-3">
                  Details
                </th>
                <th scope="col" class="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {addOns.map((addOn) => {
                return (
                  <tr
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={addOn.id}
                  >
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {addOn.id}
                    </th>
                    <td class="px-6 py-4">{addOn.type}</td>
                    <td class="px-6 py-4">
                      Instruction Title:
                      <br /> Detailed Title: {addOn.details}
                    </td>
                    <td class="px-6 py-4">
                      <div className="flex justify-around items-center">
                        <img
                          src="/pencil.png"
                          alt="edit"
                          width={12}
                          height={12}
                        />
                        <img
                          src="/delete.png"
                          alt="delete"
                          width={12}
                          height={12}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : null}

      <form class=" mx-auto mt-5">
        <label
          for="countries"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select Add on Type
        </label>
        <select
          id="front"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>USer Instruction</option>
          <option value="Front_Only">Not user Instruction</option>
        </select>
      </form>
      <div class="mb-6">
        <label
          for="ins-title"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Instruction Title
        </label>
        <input
          type="text"
          id="step-title"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter..."
        />
      </div>
      <div class="mb-6">
        <label
          for="detail-ins"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Detailed Instruction
        </label>
        <input
          type="text"
          id="step-desc"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Description"
        />
      </div>
      <div className="flex justify-between items-center">
        <button
          onClick={handleAddAddon}
          type="button"
          class="text-white mt-5  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Add Add On
        </button>
        <button
          onClick={() => handleSubTab("rules")}
          type="button"
          class="text-white mt-5 w-48 bg-gray-500 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Skip
        </button>
      </div>
    </div>
  );
};

export default AddOns;
