"use client";

export default function AddAssetModal({
  open,
  onClose,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl w-full max-w-2xl p-8">

        <h2 className="text-2xl font-bold">
          Add New Asset
        </h2>

        <div className="grid md:grid-cols-2 gap-5 mt-6">

          <input
            placeholder="Asset Name"
            className="border rounded-xl p-3"
          />

          <input
            placeholder="Asset Tag"
            className="border rounded-xl p-3"
          />

          <select className="border rounded-xl p-3">
            <option>Category</option>
            <option>Electronics</option>
            <option>Furniture</option>
            <option>Vehicles</option>
          </select>

          <input
            placeholder="Serial Number"
            className="border rounded-xl p-3"
          />

          <input
            placeholder="Location"
            className="border rounded-xl p-3"
          />

          <select className="border rounded-xl p-3">
            <option>Status</option>
            <option>Available</option>
            <option>Allocated</option>
            <option>Maintenance</option>
          </select>

        </div>

        <div className="flex justify-end gap-3 mt-8">

          <button
            onClick={onClose}
            className="px-5 py-2 border rounded-xl"
          >
            Cancel
          </button>

          <button className="px-5 py-2 bg-indigo-600 text-white rounded-xl">
            Save Asset
          </button>

        </div>

      </div>

    </div>
  );
}