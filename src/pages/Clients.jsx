import React from "react";

export default function Clients() {
  return (
    <div className="section-container">
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-50 mb-3">
        Clients & Engagements
      </h2>
      <p className="text-sm text-slate-300 max-w-2xl mb-6">
        Use this section to list your client segments, sample logos, and short
        success stories. All content here is placeholder and can be edited
        later.
      </p>
      <div className="grid gap-4 md:grid-cols-3 text-xs text-slate-300">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          IT / Product companies · Cloud & DevOps transformations
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          Startups · MVP builds, AI assistants, rapid PoCs
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          Enterprises · Modernization, security, and platform engineering
        </div>
      </div>
    </div>
  );
}
