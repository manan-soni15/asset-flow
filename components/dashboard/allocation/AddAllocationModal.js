"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function AddAllocationModal({
  open,
  onClose,
  onSave,
  allocation,
}) {
  const [asset, setAsset] = useState("");
  const [employee, setEmployee] = useState("");
  const [department, setDepartment] = useState("IT");
  const [allocationDate, setAllocationDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [status, setStatus] = useState("Allocated");
  const [remarks, setRemarks] = useState("");

  useEffect(() => {
    if (allocation) {
      setAsset(allocation.asset);
      setEmployee(allocation.employee);
      setDepartment(allocation.department);
      setAllocationDate(allocation.allocationDate);
      setReturnDate(allocation.returnDate);
      setStatus(allocation.status);
      setRemarks(allocation.remarks);
    } else {
      setAsset("");
      setEmployee("");
      setDepartment("IT");
      setAllocationDate("");
      setReturnDate("");
      setStatus("Allocated");
      setRemarks("");
    }
  }, [allocation, open]);

  if (!open) return null;

  const handleSubmit = () => {
    if (!asset || !employee) {
      alert("Please fill all required fields.");
      return;
    }

    const data = {
      id: allocation ? allocation.id : Date.now(),
      asset,
      assetTag: allocation?.assetTag || `AF-${Date.now().toString().slice(-4)}`,
      employee,
      department,
      allocationDate,
      returnDate,
      status,
      remarks,
    };

    onSave(data);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b p-6">

          <div>
            <h2 className="text-2xl font-bold">
              {allocation ? "Edit Allocation" : "New Allocation"}
            </h2>

            <p className="text-sm text-slate-500">
              Allocate assets to employees.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-slate-100"
          >
            <X size={20} />
          </button>

        </div>

        {/* Form */}

        <div className="grid grid-cols-2 gap-5 p-6">

          <div>

            <label className="mb-2 block text-sm font-medium">
              Asset
            </label>

            <input
              value={asset}
              onChange={(e) => setAsset(e.target.value)}
              className="w-full rounded-xl border p-3"
              placeholder="Dell Latitude"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">
              Employee
            </label>

            <input
              value={employee}
              onChange={(e) => setEmployee(e.target.value)}
              className="w-full rounded-xl border p-3"
              placeholder="Rahul Sharma"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">
              Department
            </label>

            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full rounded-xl border p-3"
            >
              <option>IT</option>
              <option>HR</option>
              <option>Finance</option>
              <option>Admin</option>
            </select>

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">
              Status
            </label>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full rounded-xl border p-3"
            >
              <option>Allocated</option>
              <option>Pending</option>
              <option>Returned</option>
            </select>

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">
              Allocation Date
            </label>

            <input
              type="date"
              value={allocationDate}
              onChange={(e) => setAllocationDate(e.target.value)}
              className="w-full rounded-xl border p-3"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">
              Return Date
            </label>

            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="w-full rounded-xl border p-3"
            />

          </div>

          <div className="col-span-2">

            <label className="mb-2 block text-sm font-medium">
              Remarks
            </label>

            <textarea
              rows={3}
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              className="w-full rounded-xl border p-3"
              placeholder="Optional remarks..."
            />

          </div>

        </div>

        {/* Footer */}

        <div className="flex justify-end gap-3 border-t p-6">

          <button
            onClick={onClose}
            className="rounded-xl border px-5 py-2"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="rounded-xl bg-indigo-600 px-5 py-2 text-white hover:bg-indigo-700"
          >
            {allocation ? "Update Allocation" : "Assign Asset"}
          </button>

        </div>

      </div>

    </div>
  );
}