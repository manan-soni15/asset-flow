const employees = [
  {
    name: "Rahul Sharma",
    department: "IT",
    role: "Employee",
  },
  {
    name: "Priya Patel",
    department: "HR",
    role: "Department Head",
  },
  {
    name: "Amit Verma",
    department: "Finance",
    role: "Asset Manager",
  },
];

export default function EmployeesTable() {
  return (
    <div className="bg-white text-slate-900 rounded-2xl border border-slate-200 shadow-sm">

      {/* Header */}

      <div className="flex items-center justify-between p-6 border-b border-slate-200">

        <h2 className="text-xl font-semibold text-slate-900">
          Employee Directory
        </h2>

        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium">
          + Add Employee
        </button>

      </div>

      {/* Table */}

      <table className="w-full text-slate-800">

        <thead className="bg-slate-50">

          <tr className="border-b border-slate-200">

            <th className="p-4 text-left font-semibold text-slate-700">
              Name
            </th>

            <th className="p-4 text-left font-semibold text-slate-700">
              Department
            </th>

            <th className="p-4 text-left font-semibold text-slate-700">
              Role
            </th>

          </tr>

        </thead>

        <tbody>

          {employees.map((employee) => (

            <tr
              key={employee.name}
              className="border-b border-slate-200 hover:bg-slate-50"
            >

              <td className="p-4 font-medium text-slate-900">
                {employee.name}
              </td>

              <td className="p-4 text-slate-700">
                {employee.department}
              </td>

              <td className="p-4">

                <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
                  {employee.role}
                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}