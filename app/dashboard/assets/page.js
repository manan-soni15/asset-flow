"use client";

import { useState } from "react";

import AssetToolbar from "@/components/dashboard/assets/AssetToolbar";
import AssetTable from "@/components/dashboard/assets/AssetTable";
import AddAssetModal from "@/components/dashboard/assets/AddAssetModal";
import ViewAssetModal from "@/components/dashboard/assets/ViewAssetModal";

// ----------------------
// Initial Dummy Data
// ----------------------

const initialAssets = [
  {
    id: 1,
    name: "Dell Latitude 7420",
    tag: "AF-0001",
    category: "Electronics",
    assigned: "Rahul Sharma",
    location: "IT Office",
    status: "Available",
    condition: "Excellent",
    purchaseDate: "2026-07-01",
  },
  {
    id: 2,
    name: "HP EliteBook",
    tag: "AF-0002",
    category: "Electronics",
    assigned: "Priya Patel",
    location: "HR",
    status: "Allocated",
    condition: "Good",
    purchaseDate: "2026-06-20",
  },
  {
    id: 3,
    name: "Conference Projector",
    tag: "AF-0003",
    category: "Equipment",
    assigned: "-",
    location: "Meeting Room",
    status: "Maintenance",
    condition: "Fair",
    purchaseDate: "2026-05-15",
  },
];

export default function AssetsPage() {

  // ----------------------
  // State
  // ----------------------

  const [assets, setAssets] = useState(initialAssets);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const [selectedAsset, setSelectedAsset] = useState(null);

  // ----------------------
  // Add Asset
  // ----------------------

  const handleAddAsset = (newAsset) => {
    setAssets((prevAssets) => [...prevAssets, newAsset]);
  };

  // ----------------------
  // Update Asset
  // ----------------------

  const handleUpdateAsset = (updatedAsset) => {
    setAssets((prevAssets) =>
      prevAssets.map((asset) =>
        asset.id === updatedAsset.id ? updatedAsset : asset
      )
    );

    setSelectedAsset(null);
    setIsModalOpen(false);
  };

  // ----------------------
  // Delete Asset
  // ----------------------

  const handleDeleteAsset = (id) => {
    setAssets((prevAssets) =>
      prevAssets.filter((asset) => asset.id !== id)
    );
  };

  // ----------------------
  // Edit Asset
  // ----------------------

  const handleEditClick = (asset) => {
    setSelectedAsset(asset);
    setIsModalOpen(true);
  };

  // ----------------------
  // View Asset
  // ----------------------

  const handleViewClick = (asset) => {
    setSelectedAsset(asset);
    setIsViewModalOpen(true);
  };

  return (
    <div className="space-y-6">

      {/* Heading */}

      <div>

        <h1 className="text-3xl font-bold text-slate-800">
          Asset Management
        </h1>

        <p className="mt-1 text-slate-500">
          Register, search, filter and manage all organizational assets.
        </p>

      </div>

      {/* Toolbar */}

      <AssetToolbar
        onAddAsset={() => {
          setSelectedAsset(null);
          setIsModalOpen(true);
        }}
      />

      {/* Asset Table */}

      <AssetTable
        assets={assets}
        onDelete={handleDeleteAsset}
        onEdit={handleEditClick}
        onView={handleViewClick}
      />

      {/* Add / Edit Modal */}

      <AddAssetModal
        open={isModalOpen}
        asset={selectedAsset}
        onClose={() => {
          setSelectedAsset(null);
          setIsModalOpen(false);
        }}
        onSave={
          selectedAsset
            ? handleUpdateAsset
            : handleAddAsset
        }
      />

      {/* View Modal */}

      <ViewAssetModal
        open={isViewModalOpen}
        asset={selectedAsset}
        onClose={() => {
          setSelectedAsset(null);
          setIsViewModalOpen(false);
        }}
      />

    </div>
  );
}