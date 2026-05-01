"use client";

import { redirect } from "next/navigation";

export default function UsersError() {
    const toUserPage = () => {
        redirect("/users");
    }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-4 text-2xl font-bold">An error occurred</h1>
      <p className="mb-4 text-gray-600">
        Sorry, something went wrong while fetching the users. You will be
        redirected back to the users page shortly.
      </p>
      <button 
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 cursor-pointer"
        onClick={toUserPage}
      >
        Go back to Users Page
      </button>
    </div>
  );
}
