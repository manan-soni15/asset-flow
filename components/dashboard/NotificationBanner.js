import { AlertTriangle } from "lucide-react";

export default function NotificationBanner() {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-red-200 bg-red-50 px-5 py-4">

      <AlertTriangle
        className="text-red-600"
        size={22}
      />

      <div>

        <p className="font-semibold text-red-700">
          3 Assets Overdue
        </p>

        <p className="text-sm text-red-600">
          These assets have crossed their expected return date and require follow-up.
        </p>

      </div>

    </div>
  );
}