import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  const open = (id) => setOpenMenu(id);
  const close = () => setOpenMenu(null);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-sky-400 flex items-center justify-center font-bold text-slate-900">
            CAI
          </div>
          <div>
            <div className="font-semibold text-slate-100">Cloud AI Solution</div>
            <div className="text-xs text-slate-400">@cloudaisolution</div>
          </div>
        </Link>

        {/* NAV MENU */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

          {/* CONSULTING */}
          <div
            className="relative"
            onMouseEnter={() => open("consult")}
            onMouseLeave={close}
          >
            <button className="text-slate-200 hover:text-cyan-300">
              Consulting
            </button>

            {openMenu === "consult" && (
              <div className="absolute left-0 mt-3 w-56 bg-slate-900 border border-slate-800 rounded-xl shadow-xl p-3">
                <Link className="dropdown-item" to="/consulting">Cloud Consulting</Link>
                <Link className="dropdown-item" to="/consulting">AI Automation</Link>
                <Link className="dropdown-item" to="/consulting">DevOps Consulting</Link>
              </div>
            )}
          </div>

          {/* TRAINING */}
          <div
            className="relative"
            onMouseEnter={() => open("training")}
            onMouseLeave={close}
          >
            <button className="text-slate-200 hover:text-cyan-300">
              Training
            </button>

            {openMenu === "training" && (
              <div className="absolute left-0 mt-3 w-56 bg-slate-900 border border-slate-800 rounded-xl shadow-xl p-3">
                <Link className="dropdown-item" to="/training">Corporate Training</Link>
                <Link className="dropdown-item" to="/training">Weekend Batches</Link>
                <Link className="dropdown-item" to="/training">Individual Training</Link>
              </div>
            )}
          </div>

          {/* ⭐ MEGA MENU: CERTIFICATIONS (CLOUDTHAT STYLE) ⭐ */}
          <div
            className="relative"
            onMouseEnter={() => open("certs")}
            onMouseLeave={close}
          >
            <button className="text-slate-200 hover:text-cyan-300">
              Certifications ▼
            </button>

            {openMenu === "certs" && (
              <div className="absolute left-0 mt-3 w-[750px] grid grid-cols-3 gap-6 p-6 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl">

                {/* COLUMN 1 */}
                <div>
                  <h3 className="text-slate-300 font-semibold mb-2">Microsoft</h3>
                  <Link className="dropdown-item" to="/certifications/az-104">AZ-104 Administrator</Link>
                  <Link className="dropdown-item" to="/certifications/az-204">AZ-204 Developer</Link>
                  <Link className="dropdown-item" to="/certifications/az-305">AZ-305 Architect</Link>
                  <Link className="dropdown-item" to="/certifications/az-400">AZ-400 DevOps Expert</Link>
                  <Link className="dropdown-item" to="/certifications/ai-102">AI-102 AI Engineer</Link>
                </div>

                {/* COLUMN 2 */}
                <div>
                  <h3 className="text-slate-300 font-semibold mb-2">Oracle</h3>
                  <Link className="dropdown-item" to="/certifications/oracle-ocp">Oracle OCP</Link>
                  <Link className="dropdown-item" to="/certifications/oracle-adb">Autonomous DB Specialist</Link>

                  <h3 className="text-slate-300 font-semibold mt-4 mb-2">DevOps</h3>
                  <Link className="dropdown-item" to="/certifications/cka">CKA</Link>
                  <Link className="dropdown-item" to="/certifications/devops-pro">DevOps Professional</Link>
                </div>

                {/* COLUMN 3 */}
                <div>
                  <h3 className="text-slate-300 font-semibold mb-2">Security</h3>
                  <Link className="dropdown-item" to="/certifications/az-500">AZ-500 Security Engineer</Link>
                  <Link className="dropdown-item" to="/certifications/sc-100">SC-100 Cybersecurity Architect</Link>

                  <h3 className="text-slate-300 font-semibold mt-4 mb-2">Cloud</h3>
                  <Link className="dropdown-item" to="/certifications/aws-sa">AWS SA Associate</Link>
                  <Link className="dropdown-item" to="/certifications/gcp-ace">GCP ACE</Link>

                  <h3 className="text-slate-300 font-semibold mt-4 mb-2">AI & Data</h3>
                  <Link className="dropdown-item" to="/certifications/ai-engineer">AI Engineer</Link>
                  <Link className="dropdown-item" to="/certifications/data-engineer">Data Engineer</Link>
                </div>

              </div>
            )}
          </div>

          {/* PARTNERS */}
          <div
            className="relative"
            onMouseEnter={() => open("partners")}
            onMouseLeave={close}
          >
            <button className="text-slate-200 hover:text-cyan-300">Partners</button>

            {openMenu === "partners" && (
              <div className="absolute left-0 mt-3 w-56 bg-slate-900 border border-slate-800 rounded-xl shadow-xl p-3">
                <Link className="dropdown-item" to="/partners">Tech Partners</Link>
                <Link className="dropdown-item" to="/partners">Training Partners</Link>
              </div>
            )}
          </div>

          {/* CLIENTS */}
          <div
            className="relative"
            onMouseEnter={() => open("clients")}
            onMouseLeave={close}
          >
            <button className="text-slate-200 hover:text-cyan-300">Clients</button>

            {openMenu === "clients" && (
              <div className="absolute left-0 mt-3 w-56 bg-slate-900 border border-slate-800 rounded-xl shadow-xl p-3">
                <Link className="dropdown-item" to="/clients">IT Companies</Link>
                <Link className="dropdown-item" to="/clients">Corporate Clients</Link>
              </div>
            )}
          </div>

          {/* BLOG */}
          <Link to="/blog" className="text-slate-200 hover:text-cyan-300">
            Blog / Resources
          </Link>

        </nav>
      </div>
    </header>
  );
}
