import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <section className="section-container grid gap-10 md:grid-cols-[minmax(0,1.3fr),minmax(0,1fr)] items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-slate-900/80 px-3 py-1 text-[11px] font-medium text-cyan-200 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Cloud · AI · Training · Consulting
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-50 mb-4">
            Cloud & AI consulting and{" "}
            <span className="text-cyan-300">certification‑aligned training</span>
            {" "}for modern teams.
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-xl mb-6">
            Cloud AI Solution (@cloudaisolution) helps individuals and enterprises
            modernize on cloud, adopt AI safely, and upskill teams with hands‑on,
            project‑driven programs.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            <Link
              to="/certifications"
              className="inline-flex items-center rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-400 active:bg-cyan-300"
            >
              View Certifications
            </Link>
            <Link
              to="/consulting"
              className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-100 hover:border-cyan-400"
            >
              Talk to Consulting Team
            </Link>
          </div>
          <dl className="grid grid-cols-3 gap-4 text-xs md:text-sm text-slate-300">
            <div>
              <dt className="text-slate-400">Enterprise Projects</dt>
              <dd className="text-lg font-semibold text-slate-50">50+ </dd>
            </div>
            <div>
              <dt className="text-slate-400">Professionals Trained</dt>
              <dd className="text-lg font-semibold text-slate-50">2K+ </dd>
            </div>
            <div>
              <dt className="text-slate-400">Cloud & AI Tracks</dt>
              <dd className="text-lg font-semibold text-slate-50">15+ </dd>
            </div>
          </dl>
        </div>

        <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-5 shadow-[0_0_40px_rgba(8,145,178,0.3)]">
          <p className="text-xs font-medium text-cyan-200 mb-3">
            Snapshot: What we do
          </p>
          <ul className="space-y-3 text-xs text-slate-200">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <p>
                <span className="font-semibold">Cloud consulting</span> for Azure,
                AWS, and multi‑cloud architectures.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <p>
                <span className="font-semibold">AI‑first solutions</span> with
                chatbots, copilots, and automation for business workflows.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <p>
                <span className="font-semibold">Certification‑ready training</span>{" "}
                aligned to popular Cloud & AI exams, with labs and projects.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <p>
                <span className="font-semibold">Advisory & enablement</span> for
                leaders, architects, and engineering teams.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
