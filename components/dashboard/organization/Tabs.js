"use client";

export default function Tabs({
  activeTab,
  setActiveTab,
}) {
  const tabs = [
    "Departments",
    "Categories",
    "Employees",
  ];

  return (
    <div className="flex gap-3 border-b pb-4">

      {tabs.map((tab) => (

        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-5 py-2 rounded-lg font-medium transition

          ${
            activeTab === tab
              ? "bg-indigo-600 text-white"
              : "bg-white border border-slate-200 hover:bg-slate-100"
          }

          `}
        >
          {tab}
        </button>

      ))}

    </div>
  );
}