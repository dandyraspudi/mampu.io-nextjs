"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function UsersError() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the users page after a short delay
    const timer = setTimeout(() => {
      router.push("/users");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-4 text-2xl font-bold">An error occurred</h1>
      <p className="mb-4 text-gray-600">
        Sorry, something went wrong while fetching the users. You will be
        redirected back to the users page shortly.
      </p>
    </div>
  );
}
