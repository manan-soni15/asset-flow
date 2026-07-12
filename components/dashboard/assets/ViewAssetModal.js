"use client";

import { X } from "lucide-react";

export default function ViewAssetModal({
  open,
  asset,
  onClose,
}) {
  if (!open || !asset) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-xl rounded-2xl bg-white shadow-xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b p-6">

          <h2 className="text-2xl font-bold">
            Asset Details
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-slate-100"
          >
            <X size={20} />
          </button>

        </div>

        {/* Body */}

        <div className="space-y-5 p-6">

          <InfoRow
            label="Asset Name"
            value={asset.name}
          />

          <InfoRow
            label="Asset Tag"
            value={asset.tag}
          />

          <InfoRow
            label="Category"
            value={asset.category}
          />

          <InfoRow
            label="Assigned To"
            value={asset.assigned}
          />

          <InfoRow
            label="Location"
            value={asset.location}
          />

          <InfoRow
            label="Status"
            value={asset.status}
          />

          <InfoRow
            label="Condition"
            value={asset.condition || "Excellent"}
          />

          <InfoRow
            label="Purchase Date"
            value={asset.purchaseDate || "-"}
          />

        </div>

        {/* Footer */}

        <div className="flex justify-end border-t p-5">

          <button
            onClick={onClose}
            className="rounded-xl bg-indigo-600 px-5 py-2 text-white"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="grid grid-cols-2 gap-6 border-b pb-3">

      <p className="font-semibold text-slate-700">
        {label}
      </p>

      <p className="text-slate-600">
        {value}
      </p>

    </div>
  );
}