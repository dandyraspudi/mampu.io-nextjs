export default function LoadingSpinner({
  textLoading,
}: {
  textLoading: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-10">
      {/* Spinner */}
      <div className="relative h-12 w-12">
        <div className="absolute inset-0 rounded-full border-4 border-blue-100"></div>
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-r-blue-500 border-t-blue-600"></div>
      </div>

      <div className="text-center">
        <p className="mt-2 text-center text-gray-700 dark:text-slate-400 font-semibold">
          {textLoading}
        </p>
        <p>Please wait while we fetch the data.</p>
      </div>
    </div>
  );
}
