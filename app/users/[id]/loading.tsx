export default function UserDetailLoading() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="animate-pulse">
          <div className="mb-6 h-8 w-1/3 rounded bg-slate-200"></div>
          <div className="mb-4 h-4 w-1/4 rounded bg-slate-200"></div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-2 h-5 w-1/4 rounded bg-slate-200"></div>
              <div className="h-4 w-1/2 rounded bg-slate-200"></div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-2 h-5 w-1/4 rounded bg-slate-200"></div>
              <div className="h-4 w-3/4 rounded bg-slate-200"></div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-2 h-5 w-1/4 rounded bg-slate-200"></div>
              <div className="h-4 w-1/3 rounded bg-slate-200"></div>
            </div>
          </div>

          <div className="mt-8 h-10 w-40 rounded-full bg-slate-200"></div>
        </div>
      </section>
    </main>
  );
}
