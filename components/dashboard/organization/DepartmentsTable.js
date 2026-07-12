const departments = [
  {
    name: "IT",
    employees: 24,
  },
  {
    name: "HR",
    employees: 10,
  },
  {
    name: "Finance",
    employees: 14,
  },
  {
    name: "Sales",
    employees: 21,
  },
];

export default function DepartmentsTable() {
  return (
    <div className="bg-white text-slate-900 rounded-2xl border border-slate-200 shadow-sm">

      {/* Header */}

      <div className="flex items-center justify-between p-6 border-b border-slate-200">

        <h2 className="text-xl font-semibold text-slate-900">
          Departments
        </h2>

        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium">
          + Add Department
        </button>

      </div>

      {/* Table */}

      <table className="w-full text-slate-800">

        <thead className="bg-slate-50">

          <tr className="text-left border-b border-slate-200">

            <th className="p-4 text-slate-700 font-semibold">
              Department
            </th>

            <th className="p-4 text-slate-700 font-semibold">
              Employees
            </th>

            <th className="p-4 text-slate-700 font-semibold">
              Status
            </th>

          </tr>

        </thead>

        <tbody className="text-slate-800">

          {departments.map((dept) => (

            <tr
              key={dept.name}
              className="border-b border-slate-200 hover:bg-slate-50"
            >

              <td className="p-4 font-medium text-slate-900">
                {dept.name}
              </td>

              <td className="p-4 text-slate-700">
                {dept.employees}
              </td>

              <td className="p-4">

                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                  Active
                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}