"use client";

import { Pencil, Trash2 } from "lucide-react";
import AllocationStatusBadge from "./AllocationStatusBadge";

export default function AllocationTable({
  allocations,
  onDelete,
  onEdit,
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full">
        <thead className="bg-slate-50">
          <tr>
            <th className="p-4 text-left">Asset</th>
            <th className="p-4 text-left">Employee</th>
            <th className="p-4 text-left">Department</th>
            <th className="p-4 text-left">Allocated On</th>
            <th className="p-4 text-left">Return Date</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {allocations.length === 0 ? (
            <tr>
              <td
                colSpan={7}
                className="p-10 text-center text-slate-500"
              >
                No allocations found.
              </td>
            </tr>
          ) : (
            allocations.map((allocation) => (
              <tr
                key={allocation.id}
                className="border-t hover:bg-slate-50"
              >
                <td className="p-4">
                  <div>
                    <p className="font-semibold">
                      {allocation.asset}
                    </p>
                    <p className="text-xs text-slate-500">
                      {allocation.assetTag}
                    </p>
                  </div>
                </td>

                <td className="p-4">
                  {allocation.employee}
                </td>

                <td className="p-4">
                  {allocation.department}
                </td>

                <td className="p-4">
                  {allocation.allocationDate}
                </td>

                <td className="p-4">
                  {allocation.returnDate}
                </td>

                <td className="p-4">
                  <AllocationStatusBadge
                    status={allocation.status}
                  />
                </td>

                <td className="p-4">
                  <div className="flex justify-center gap-4">

                    <button
                      onClick={() => onEdit(allocation)}
                      className="text-slate-600 hover:text-blue-600"
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      onClick={() => onDelete(allocation.id)}
                      className="text-slate-600 hover:text-red-600"
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>
                </td>

              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}