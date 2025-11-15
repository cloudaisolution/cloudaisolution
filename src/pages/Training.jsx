import React from "react";
import { Link } from "react-router-dom";

export default function Training() {
  return (
    <div className="section-container">
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-50 mb-3">
        Corporate & Individual Training
      </h2>
      <p className="text-sm text-slate-300 max-w-2xl mb-6">
        Hands‑on, lab‑driven training programs around Cloud, AI, and DevOps. Use
        this page to describe your training formats, delivery model, and
        learning outcomes.
      </p>
      <ul className="grid gap-4 md:grid-cols-3 text-sm">
        <li className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          <h3 className="font-semibold mb-1 text-slate-50">Weekend Cohorts</h3>
          <p className="text-xs text-slate-300 mb-2">
            Ideal for working professionals. Live instructor‑led sessions.
          </p>
          <Link to="/certifications" className="text-xs text-cyan-300 hover:text-cyan-200">
            View Certification Tracks →
          </Link>
        </li>
        <li className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          <h3 className="font-semibold mb-1 text-slate-50">Enterprise Batches</h3>
          <p className="text-xs text-slate-300 mb-2">
            Customized content mapped to your tech stack and role profiles.
          </p>
        </li>
        <li className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          <h3 className="font-semibold mb-1 text-slate-50">Mentored Projects</h3>
          <p className="text-xs text-slate-300 mb-2">
            Real‑world scenarios to help learners build practical confidence.
          </p>
        </li>
      </ul>
    </div>
  );
}
