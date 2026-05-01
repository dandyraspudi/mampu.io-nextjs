import Link from "next/link";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "User Detail",
  description: "Detail halaman pengguna",
};

export default function UserDetailPage({ params }: { params: { id: string } }) {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900">Detail Pengguna</h1>
        <p className="mt-2 text-sm text-slate-500">ID pengguna: {params.id}</p>

        <div className="mt-8 space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-900">Nama</h2>
            <p className="mt-2 text-slate-600">John Doe</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-900">Email</h2>
            <p className="mt-2 text-slate-600">john@example.com</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-900">Status</h2>
            <p className="mt-2 text-slate-600">Active</p>
          </div>
        </div>

        <Link
          href="/users"
          className="mt-8 inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Kembali ke Daftar Pengguna
        </Link>
      </section>
    </main>
  );
}
