const categories = [
  "Electronics",
  "Furniture",
  "Vehicles",
  "Networking",
  "Office Equipment",
];

export default function CategoriesTable() {
  return (
    <div className="bg-white text-slate-900 rounded-2xl border border-slate-200 shadow-sm">

      {/* Header */}

      <div className="flex items-center justify-between p-6 border-b border-slate-200">

        <h2 className="text-xl font-semibold text-slate-900">
          Asset Categories
        </h2>

        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium">
          + Add Category
        </button>

      </div>

      {/* Categories */}

      <div className="p-6 space-y-4">

        {categories.map((item) => (

          <div
            key={item}
            className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-4"
          >

            <span className="font-medium text-slate-800">
              {item}
            </span>

            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              Active
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}