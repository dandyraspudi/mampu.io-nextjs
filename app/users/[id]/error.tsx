"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="space-y-4 p-10 text-center">
      <h2 className="text-2xl font-bold">Failed to load user</h2>

      <button
        onClick={() => reset()}
        className="rounded-lg bg-blue-600 px-4 py-2 text-white cursor-pointer hover:bg-blue-700"
      >
        Retry
      </button>
    </div>
  );
}
