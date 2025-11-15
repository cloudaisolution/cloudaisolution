import React from "react";

export default function Consulting() {
  return (
    <div className="section-container">
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-50 mb-3">
        Cloud & AI Consulting
      </h2>
      <p className="text-sm text-slate-300 max-w-2xl mb-6">
        Cloud AI Solution offers end‑to‑end consulting services across cloud
        migration, AI adoption, modernization, and platform engineering. Use
        this page to showcase your consulting offerings, methodology, and
        sample case studies.
      </p>
      <div className="grid gap-4 md:grid-cols-3 text-sm">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          <h3 className="font-semibold mb-2 text-slate-50">Cloud Strategy</h3>
          <p className="text-slate-300 text-xs">
            Assess current workloads, build a roadmap, and design secure,
            scalable architectures.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          <h3 className="font-semibold mb-2 text-slate-50">AI Solutions</h3>
          <p className="text-slate-300 text-xs">
            Chatbots, copilots, document intelligence, and workflow automation.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          <h3 className="font-semibold mb-2 text-slate-50">Platform Engineering</h3>
          <p className="text-slate-300 text-xs">
            DevOps, Kubernetes platforms, observability, and reliability
            engineering.
          </p>
        </div>
      </div>
    </div>
  );
}
