import { Pencil, Trash2 } from "lucide-react";
import StatusBadge from "./StatusBadge";

const assets = [
  {
    id: 1,
    name: "Dell Latitude 7420",
    tag: "AF-0001",
    category: "Electronics",
    assigned: "Rahul Sharma",
    location: "IT Office",
    status: "Available",
  },
  {
    id: 2,
    name: "HP EliteBook",
    tag: "AF-0002",
    category: "Electronics",
    assigned: "Priya Patel",
    location: "HR",
    status: "Allocated",
  },
  {
    id: 3,
    name: "Conference Projector",
    tag: "AF-0003",
    category: "Equipment",
    assigned: "-",
    location: "Meeting Room",
    status: "Maintenance",
  },
];

export default function AssetTable() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

      <table className="w-full">

        <thead className="bg-slate-50">

          <tr>

            <th className="text-left p-4">Asset</th>
            <th className="text-left p-4">Tag</th>
            <th className="text-left p-4">Category</th>
            <th className="text-left p-4">Assigned To</th>
            <th className="text-left p-4">Location</th>
            <th className="text-left p-4">Status</th>
            <th className="text-center p-4">Actions</th>

          </tr>

        </thead>

        <tbody>

          {assets.map((asset) => (

            <tr
              key={asset.id}
              className="border-t hover:bg-slate-50"
            >

              <td className="p-4 font-medium">
                {asset.name}
              </td>

              <td className="p-4">
                {asset.tag}
              </td>

              <td className="p-4">
                {asset.category}
              </td>

              <td className="p-4">
                {asset.assigned}
              </td>

              <td className="p-4">
                {asset.location}
              </td>

              <td className="p-4">
                <StatusBadge status={asset.status} />
              </td>

              <td className="p-4">

                <div className="flex justify-center gap-3">

                  <button className="text-indigo-600 hover:text-indigo-800">
                    <Pencil size={18} />
                  </button>

                  <button className="text-red-600 hover:text-red-800">
                    <Trash2 size={18} />
                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}