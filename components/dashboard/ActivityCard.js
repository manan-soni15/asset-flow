import {
  Laptop,
  CalendarDays,
  Wrench,
} from "lucide-react";

const activities = [
  {
    icon: Laptop,
    title: "Laptop AF-0114 Allocated",
    description: "Assigned to Priya Shah • IT Department",
    time: "2 min ago",
  },
  {
    icon: CalendarDays,
    title: "Conference Room B2 Booked",
    description: "Booking confirmed • 2:00 PM - 3:00 PM",
    time: "15 min ago",
  },
  {
    icon: Wrench,
    title: "Projector AF-0062 Repaired",
    description: "Maintenance request completed",
    time: "1 hour ago",
  },
];

export default function ActivityCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <h3 className="mb-6 text-xl font-semibold text-slate-800">
        Recent Activity
      </h3>

      <div className="space-y-5">

        {activities.map((activity, index) => {
          const Icon = activity.icon;

          return (
            <div
              key={index}
              className="flex items-start gap-4 border-b border-slate-100 pb-4 last:border-none last:pb-0"
            >

              <div className="rounded-xl bg-indigo-100 p-3">

                <Icon
                  size={20}
                  className="text-indigo-600"
                />

              </div>

              <div className="flex-1">

                <h4 className="font-semibold text-slate-800">
                  {activity.title}
                </h4>

                <p className="text-sm text-slate-500">
                  {activity.description}
                </p>

              </div>

              <span className="text-xs text-slate-400 whitespace-nowrap">
                {activity.time}
              </span>

            </div>
          );
        })}

      </div>

    </div>
  );
}