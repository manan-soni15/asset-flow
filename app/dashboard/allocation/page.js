"use client";

import { useState } from "react";

import AllocationToolbar from "@/components/dashboard/allocation/AllocationToolbar";
import AllocationTable from "@/components/dashboard/allocation/AllocationTable";
import AddAllocationModal from "@/components/dashboard/allocation/AddAllocationModal";

// ------------------------------------------------
// Dummy Allocation Data
// ------------------------------------------------

const initialAllocations = [
  {
    id: 1,
    asset: "Dell Latitude 7420",
    assetTag: "AF-0001",
    employee: "Rahul Sharma",
    department: "IT",
    allocationDate: "2026-07-12",
    returnDate: "2026-07-25",
    status: "Allocated",
    remarks: "Development Team",
  },
  {
    id: 2,
    asset: "HP EliteBook",
    assetTag: "AF-0002",
    employee: "Priya Patel",
    department: "HR",
    allocationDate: "2026-07-10",
    returnDate: "2026-07-28",
    status: "Pending",
    remarks: "HR Department",
  },
];

// ------------------------------------------------

export default function AllocationPage() {

  // ----------------------------
  // States
  // ----------------------------

  const [allocations, setAllocations] =
    useState(initialAllocations);

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const [selectedAllocation, setSelectedAllocation] =
    useState(null);

  // ----------------------------
  // Add Allocation
  // ----------------------------

  const handleAddAllocation = (newAllocation) => {

    setAllocations((prev) => [
      ...prev,
      newAllocation,
    ]);

  };

  // ----------------------------
  // Update Allocation
  // ----------------------------

  const handleUpdateAllocation = (updated) => {

    setAllocations((prev) =>
      prev.map((allocation) =>
        allocation.id === updated.id
          ? updated
          : allocation
      )
    );

    setSelectedAllocation(null);

    setIsModalOpen(false);

  };

  // ----------------------------
  // Delete Allocation
  // ----------------------------

  const handleDeleteAllocation = (id) => {

    setAllocations((prev) =>
      prev.filter(
        (allocation) =>
          allocation.id !== id
      )
    );

  };

  // ----------------------------
  // Edit Allocation
  // ----------------------------

  const handleEditAllocation = (allocation) => {

    setSelectedAllocation(allocation);

    setIsModalOpen(true);

  };

  // ----------------------------
  // Return JSX
  // ----------------------------

  return (

    <div className="space-y-6">

      {/* Heading */}

      <div>

        <h1 className="text-3xl font-bold text-slate-800">
          Asset Allocation
        </h1>

        <p className="mt-1 text-slate-500">
          Assign organizational assets to employees
          and monitor allocation status.
        </p>

      </div>
            {/* Toolbar */}

      <AllocationToolbar
        onAddAllocation={() => {
          setSelectedAllocation(null);
          setIsModalOpen(true);
        }}
      />

      {/* Allocation Table */}

      <AllocationTable
        allocations={allocations}
        onDelete={handleDeleteAllocation}
        onEdit={handleEditAllocation}
      />

      {/* Add / Edit Modal */}

      <AddAllocationModal
        open={isModalOpen}
        allocation={selectedAllocation}
        onClose={() => {
          setSelectedAllocation(null);
          setIsModalOpen(false);
        }}
        onSave={
          selectedAllocation
            ? handleUpdateAllocation
            : handleAddAllocation
        }
      />
          </div>

  );

}