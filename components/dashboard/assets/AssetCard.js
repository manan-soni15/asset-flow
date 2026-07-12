import {
  Laptop,
  MapPin,
  User,
} from "lucide-react";

export default function AssetCard({ asset }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

      <div className="flex justify-between">

        <div>

          <h3 className="font-semibold text-lg">
            {asset.name}
          </h3>

          <p className="text-slate-500">
            {asset.tag}
          </p>

        </div>

        <Laptop className="text-indigo-600" />

      </div>

      <div className="mt-6 space-y-3">

        <div className="flex items-center gap-2 text-sm text-slate-600">

          <User size={16} />

          {asset.assigned}

        </div>

        <div className="flex items-center gap-2 text-sm text-slate-600">

          <MapPin size={16} />

          {asset.location}

        </div>

      </div>

      <div className="mt-6">

        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">

          {asset.status}

        </span>

      </div>

    </div>
  );
}