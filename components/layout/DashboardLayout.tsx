import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="hidden md:block">
        <Sidebar />
      </div>

      <div className="flex-1">
        <Header />

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
