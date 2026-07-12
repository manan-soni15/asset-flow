import Sidebar from "@/components/dashboard/Sidebar";
import TopBar from "@/components/dashboard/TopBar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-slate-50">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <div className="p-6">

          <TopBar />

        </div>

        <main className="flex-1 px-6 pb-6">

          {children}

        </main>

      </div>

    </div>
  );
}