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
    category: "Laptop",
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
    category: "Laptop",
    allocationDate: "2026-07-10",
    returnDate: "2026-07-28",
    status: "Pending",
    remarks: "HR Department",
  },
];

// ------------------------------------------------

export default function AllocationPage() {

  // Allocation Data

  const [allocations, setAllocations] =
    useState(initialAllocations);

  // Modal

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const [selectedAllocation, setSelectedAllocation] =
    useState(null);

  // ----------------------------
  // Search & Filters
  // ----------------------------

  const [search, setSearch] = useState("");

  const [status, setStatus] =
    useState("All");

  const [department, setDepartment] =
    useState("All");

  const [category, setCategory] =
    useState("All");

  // ----------------------------
  // Filter Logic
  // ----------------------------

  const filteredAllocations =
    allocations.filter((allocation) => {

      const matchesSearch =
        allocation.asset
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        allocation.assetTag
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        allocation.employee
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        status === "All" ||
        allocation.status === status;

      const matchesDepartment =
        department === "All" ||
        allocation.department === department;

      const matchesCategory =
        category === "All" ||
        allocation.category === category;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesDepartment &&
        matchesCategory
      );

    });

  // ----------------------------
  // Add Allocation
  // ----------------------------

  const handleAddAllocation = (newAllocation) => {

    setAllocations((prev) => [
      ...prev,
      newAllocation,
    ]);

    setIsModalOpen(false);

  };

  // ----------------------------
  // Update Allocation
  // ----------------------------

  const handleUpdateAllocation = (updatedAllocation) => {

    setAllocations((prev) =>
      prev.map((allocation) =>
        allocation.id === updatedAllocation.id
          ? updatedAllocation
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
  // UI
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

        search={search}
        setSearch={setSearch}

        status={status}
        setStatus={setStatus}

        department={department}
        setDepartment={setDepartment}

        category={category}
        setCategory={setCategory}

        onAddAllocation={() => {

          setSelectedAllocation(null);

          setIsModalOpen(true);

        }}

      />

      {/* Allocation Table */}

      <AllocationTable
        allocations={filteredAllocations}
        onDelete={handleDeleteAllocation}
        onEdit={handleEditAllocation}
      />

      {/* Modal */}

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