import React from "react";

const Card = () => {
  return (
    <a
      href="#"
      class=" mt-5 block max-w-sm p-6 bg-blue-200 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <p class="font-normal text-gray-700 dark:text-gray-400">
        <strong> Step 1:</strong> [id-proof-1].
      </p>
      <p class="font-normal text-gray-700 dark:text-gray-400">
        <strong> Title:</strong> Aadhar card.
      </p>
      <p class="font-normal text-gray-700 dark:text-gray-400">
        <strong> Verification</strong>
      </p>
      <p class="font-normal text-gray-700 dark:text-gray-400">
        <strong> Description</strong> Please upload the following Ids
      </p>
      <div className="flex justify-center items-center">
        <img
          src="/pencil.png"
          className="mx-5"
          alt="edit"
          width={12}
          height={12}
        />
        <img src="/delete.png" alt="delete" width={12} height={12} />
      </div>
    </a>
  );
};

export default Card;
