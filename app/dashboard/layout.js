import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-slate-50">

      <Sidebar />

      <main className="flex-1 p-8">
        {children}
      </main>

    </div>
  );
}