import { ArrowUpRight } from "lucide-react";

export default function KPICard({
  title,
  value,
  icon: Icon,
  color = "indigo",
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition-shadow">

      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm text-slate-500 font-medium">
            {title}
          </p>

          <h2 className="text-4xl font-bold mt-3 text-slate-800">
            {value}
          </h2>

        </div>

        <div
          className={`
            h-12
            w-12
            rounded-xl
            flex
            items-center
            justify-center
            bg-${color}-100
          `}
        >
          <Icon className={`text-${color}-600`} size={24} />
        </div>

      </div>

      <div className="mt-6 flex items-center text-sm text-green-600">

        <ArrowUpRight size={16} />

        <span className="ml-1">
          Updated just now
        </span>

      </div>

    </div>
  );
}