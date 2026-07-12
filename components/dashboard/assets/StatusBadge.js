export default function StatusBadge({ status }) {
  const styles = {
    Available: "bg-green-100 text-green-700",
    Allocated: "bg-blue-100 text-blue-700",
    Maintenance: "bg-amber-100 text-amber-700",
    Lost: "bg-red-100 text-red-700",
    Disposed: "bg-slate-200 text-slate-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${
        styles[status] || "bg-slate-100 text-slate-700"
      }`}
    >
      {status}
    </span>
  );
}