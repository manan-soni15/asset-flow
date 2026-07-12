import {
  Plus,
  CalendarPlus,
  Wrench,
} from "lucide-react";

export default function QuickActions() {
  return (
    <div>

      <h3 className="text-lg font-semibold text-slate-800 mb-4">
        Quick Actions
      </h3>

      <div className="grid gap-4 md:grid-cols-3">

        <button className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-4 text-white font-semibold hover:bg-indigo-700">

          <Plus size={18} />

          Register Asset

        </button>

        <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-4 font-semibold hover:bg-slate-100">

          <CalendarPlus size={18} />

          Book Resource

        </button>

        <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-4 font-semibold hover:bg-slate-100">

          <Wrench size={18} />

          Raise Request

        </button>

      </div>

    </div>
  );
}