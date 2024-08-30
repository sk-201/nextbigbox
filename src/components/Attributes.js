import React from "react";

const Attributes = () => {
  const checkboxes = [
    "Pan",
    "Voter Id",
    "Passport",
    "Aadhar",
    "Driving License",
    "Form-60",
  ];
  return (
    <div>
      <div class="mb-6">
        <label
          for="step-title"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Step Title
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
          for="step-desc"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Step Description
        </label>
        <input
          type="text"
          id="step-desc"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Description"
        />
      </div>
      <p className="mb-5">Strict Validate for Image type</p>
      {checkboxes.map((checkbox) => {
        return (
          <div class="flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-checkbox"
              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {checkbox}
            </label>
          </div>
        );
      })}

      <form class="max-w-sm mx-auto">
        <label
          for="countries"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select an option
        </label>
        <select
          id="front"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Front_BACK</option>
          <option value="Front_Only">Front_Only</option>
        </select>
        <div class="flex items-center mb-4">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-checkbox"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            id analysis required
          </label>
        </div>
        <p className="mb-5">OCR Data update allowed</p>
        <div class="flex items-center mb-4">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-checkbox"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            allow_ocr_data_update
          </label>
        </div>
        <p className="mb-5">Is Optional?</p>
        <div class="flex items-center mb-4">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-checkbox"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            optional
          </label>
        </div>
        <label
          for="countries"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Face Match Type
        </label>
        <select
          id="none"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>NONE</option>
        </select>
        <label
          for="countries"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Central Database verification source
        </label>
        <select
          id="none"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>OCR_DATA</option>
        </select>
      </form>
    </div>
  );
};

export default Attributes;
