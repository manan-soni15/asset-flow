"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function AddAssetModal({
  open,
  onClose,
  onSave,
  asset,
}) {

  const [assetName, setAssetName] = useState("");
  const [category, setCategory] = useState("Electronics");
  const [location, setLocation] = useState("IT Office");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [condition, setCondition] = useState("Excellent");
  const [status, setStatus] = useState("Available");

  // ----------------------------
  // Load data while editing
  // ----------------------------

  useEffect(() => {

    if (asset) {

      setAssetName(asset.name || "");
      setCategory(asset.category || "Electronics");
      setLocation(asset.location || "IT Office");
      setPurchaseDate(asset.purchaseDate || "");
      setCondition(asset.condition || "Excellent");
      setStatus(asset.status || "Available");

    } else {

      setAssetName("");
      setCategory("Electronics");
      setLocation("IT Office");
      setPurchaseDate("");
      setCondition("Excellent");
      setStatus("Available");

    }

  }, [asset, open]);

  if (!open) return null;

  // ----------------------------
  // Save / Update
  // ----------------------------

  const handleSave = () => {

    if (!assetName.trim()) {
      alert("Please enter Asset Name");
      return;
    }

    const assetData = {

      id: asset ? asset.id : Date.now(),

      name: assetName,

      tag: asset
        ? asset.tag
        : `AF-${Date.now().toString().slice(-4)}`,

      category,

      assigned: asset?.assigned || "-",

      location,

      purchaseDate,

      condition,

      status,

    };

    onSave(assetData);

    onClose();
  };

  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-xl">

        {/* ===== HEADER ===== */}

        <div className="flex items-center justify-between border-b px-6 py-4">

          <div>

            <h2 className="text-2xl font-bold">

              {asset ? "Edit Asset" : "Add New Asset"}

            </h2>

            <p className="text-sm text-slate-500">

              {asset
                ? "Update asset details."
                : "Fill in the details below."}

            </p>

          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-slate-100"
          >
            <X size={20} />
          </button>

        </div>

        {/* ===== BODY ===== */}
        <div className="grid grid-cols-2 gap-5 p-6">

  {/* Asset Name */}

  <div>

    <label className="mb-2 block text-sm font-medium">
      Asset Name
    </label>

    <input
      type="text"
      value={assetName}
      onChange={(e) => setAssetName(e.target.value)}
      className="w-full rounded-xl border p-3"
      placeholder="Dell Latitude 7420"
    />

  </div>

  {/* Asset Tag */}

  <div>

    <label className="mb-2 block text-sm font-medium">
      Asset Tag
    </label>

    <input
      readOnly
      value={
        asset
          ? asset.tag
          : `AF-${Date.now().toString().slice(-4)}`
      }
      className="w-full rounded-xl border bg-slate-100 p-3"
    />

  </div>

  {/* Category */}

  <div>

    <label className="mb-2 block text-sm font-medium">
      Category
    </label>

    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="w-full rounded-xl border p-3"
    >
      <option>Electronics</option>
      <option>Furniture</option>
      <option>Vehicles</option>
      <option>Networking</option>
      <option>Equipment</option>
    </select>

  </div>

  {/* Location */}

  <div>

    <label className="mb-2 block text-sm font-medium">
      Location
    </label>

    <select
      value={location}
      onChange={(e) => setLocation(e.target.value)}
      className="w-full rounded-xl border p-3"
    >
      <option>IT Office</option>
      <option>HR</option>
      <option>Finance</option>
      <option>Meeting Room</option>
      <option>Reception</option>
    </select>

  </div>

  {/* Purchase Date */}

  <div>

    <label className="mb-2 block text-sm font-medium">
      Purchase Date
    </label>

    <input
      type="date"
      value={purchaseDate}
      onChange={(e) => setPurchaseDate(e.target.value)}
      className="w-full rounded-xl border p-3"
    />

  </div>

  {/* Condition */}

  <div>

    <label className="mb-2 block text-sm font-medium">
      Condition
    </label>

    <select
      value={condition}
      onChange={(e) => setCondition(e.target.value)}
      className="w-full rounded-xl border p-3"
    >
      <option>Excellent</option>
      <option>Good</option>
      <option>Fair</option>
      <option>Poor</option>
    </select>

  </div>

  {/* Status */}

  <div className="col-span-2">

    <label className="mb-2 block text-sm font-medium">
      Status
    </label>

    <select
      value={status}
      onChange={(e) => setStatus(e.target.value)}
      className="w-full rounded-xl border p-3"
    >
      <option>Available</option>
      <option>Allocated</option>
      <option>Maintenance</option>
    </select>

  </div>

</div>

{/* ===== FOOTER ===== */}

<div className="flex justify-end gap-3 border-t px-6 py-4">

  <button
    onClick={onClose}
    className="rounded-xl border px-5 py-2"
  >
    Cancel
  </button>

  <button
    onClick={handleSave}
    className="rounded-xl bg-indigo-600 px-5 py-2 text-white hover:bg-indigo-700"
  >
    {asset ? "Update Asset" : "Save Asset"}
  </button>

</div>

</div>

</div>

);
}