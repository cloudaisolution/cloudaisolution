import React from "react";

export default function Partners() {
  return (
    <div className="section-container">
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-50 mb-3">
        Technology & Training Partners
      </h2>
      <p className="text-sm text-slate-300 max-w-2xl mb-6">
        Showcase your cloud vendors, training partners, and ecosystem
        collaborations here. Logos, brief descriptions, and partnership
        highlights can be added.
      </p>
      <div className="grid gap-4 md:grid-cols-3 text-xs text-slate-300">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 h-28 flex items-center">
          Future: Azure / AWS / GCP partner logos & details
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 h-28 flex items-center">
          Training alliances, university tie‑ups, or community groups
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 h-28 flex items-center">
          Any regional or local partnerships you want to highlight
        </div>
      </div>
    </div>
  );
}
