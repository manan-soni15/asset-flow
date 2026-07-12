import AssetToolbar from "@/components/dashboard/assets/AssetToolbar";
import AssetTable from "@/components/dashboard/assets/AssetTable";

export default function AssetsPage() {
  return (
    <div className="space-y-6">

      <div>

        <h1 className="text-3xl font-bold text-slate-800">
          Asset Management
        </h1>

        <p className="text-slate-500 mt-1">
          Register, search, filter and manage all organizational assets.
        </p>

      </div>

      <AssetToolbar />

      <AssetTable />

    </div>
  );
}