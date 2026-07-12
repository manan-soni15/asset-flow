import { Pencil, Trash2, Eye } from "lucide-react";
import StatusBadge from "./StatusBadge";

export default function AssetTable({
  assets,
  onDelete,
  onEdit,
  onView,
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

      <table className="w-full">

        <thead className="bg-slate-50">

          <tr>
            <th className="p-4 text-left">Asset</th>
            <th className="p-4 text-left">Tag</th>
            <th className="p-4 text-left">Category</th>
            <th className="p-4 text-left">Assigned To</th>
            <th className="p-4 text-left">Location</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-center">Actions</th>
          </tr>

        </thead>

        <tbody>

          {assets.length === 0 ? (

            <tr>

              <td
                colSpan={7}
                className="p-10 text-center text-slate-500"
              >
                No assets found.
              </td>

            </tr>

          ) : (

            assets.map((asset) => (

              <tr
                key={asset.id}
                className="border-t hover:bg-slate-50 transition"
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

                  <div className="flex justify-center gap-4">

                    {/* View */}
                    <button
                      onClick={() => onView(asset)}
                      title="View Asset"
                      className="text-slate-500 hover:text-indigo-600 transition"
                    >
                      <Eye size={18} />
                    </button>

                    {/* Edit */}
                    <button
                      onClick={() => onEdit(asset)}
                      title="Edit Asset"
                      className="text-slate-500 hover:text-blue-600 transition"
                    >
                      <Pencil size={18} />
                    </button>

                    {/* Delete */}
                    <button
                      onClick={() => onDelete(asset.id)}
                      title="Delete Asset"
                      className="text-slate-500 hover:text-red-600 transition"
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