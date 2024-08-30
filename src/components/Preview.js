import React, { useState } from "react";

const Preview = () => {
  const prev_data = [
    { id: 1, field: "title", value: "Project Alpha" },
    { id: 2, field: "description", value: "Initial project phase description" },
    { id: 3, field: "strict validation", value: "Enabled" },
    { id: 4, field: "image_upload_mode", value: "Automatic" },
    { id: 5, field: "id analysis required", value: "Yes" },
  ];
  const defaultAddon = {
    id: 1,
    type: "User Instruction",
    details: "",
  };
  const [addOns, setAddOns] = useState([defaultAddon]);

  return (
    <div>
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <tbody>
            {prev_data.map((data) => {
              return (
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={data.id}
                >
                  <td class="px-6 py-4">{data.field}</td>
                  <td class="px-6 py-4">{data.value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

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
    </div>
  );
};

export default Preview;
