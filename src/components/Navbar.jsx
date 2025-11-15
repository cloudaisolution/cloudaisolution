import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  const menuItems = [
    {
      label: "Consulting",
      id: "consulting",
      items: [
        { label: "Cloud Consulting", to: "/consulting" },
        { label: "AI Automation", to: "/consulting" },
        { label: "DevOps Consulting", to: "/consulting" }
      ]
    },
    {
      label: "Training",
      id: "training",
      items: [
        { label: "Corporate Training", to: "/training" },
        { label: "Weekend Batches", to: "/training" },
        { label: "Individual Training", to: "/training" }
      ]
    },

    // ⭐ CLOUDTHAT-STYLE CERTIFICATIONS DROPDOWN (NO ICONS)
    {
      label: "Certifications",
      id: "certifications",
      categories: [
        { id: "microsoft", label: "Microsoft", desc: "Azure Cloud, DevOps, AI Engineer" },
        { id: "aws", label: "AWS", desc: "Architect, Developer, SysOps" },
        { id: "gcp", label: "Google Cloud", desc: "ACE, PDE, Architect" },
        { id: "oracle", label: "Oracle", desc: "OCP, OCI Architect, ADB" },
        { id: "devops", label: "DevOps", desc: "Kubernetes, GitOps, SRE" },
        { id: "security", label: "Security", desc: "AZ-500, SC-100, SC-200" },
        { id: "data", label: "Data Engineering", desc: "ETL, Big Data, Analytics" },
        { id: "ai", label: "AI & ML", desc: "AI Engineer, ML Ops" },
        { id: "pmp", label: "PMP", desc: "Project Management" }
      ]
    },

    {
      label: "Partners",
      id: "partners",
      items: [
        { label: "Tech Partners", to: "/partners" },
        { label: "Training Partners", to: "/partners" }
      ]
    },
    {
      label: "Clients",
      id: "clients",
      items: [
        { label: "Corporate Clients", to: "/clients" },
        { label: "IT & Cloud Clients", to: "/clients" }
      ]
    }
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-400 flex items-center justify-center text-slate-900 font-bold">
            CAI
          </div>
          <div>
            <h1 className="font-semibold text-slate-100">Cloud AI Solution</h1>
            <p className="text-xs text-slate-400">@cloudaisolution</p>
          </div>
        </Link>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-slate-100 text-2xl"
          onClick={() => setOpenMenu(openMenu === "mobile" ? null : "mobile")}
        >
          ☰
        </button>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-200">

          {menuItems.map((menu) => (
            <div
              key={menu.id}
              className="relative"
              onMouseEnter={() => setOpenMenu(menu.id)}
              onClick={() => setOpenMenu(openMenu === menu.id ? null : menu.id)}
            >
              <button className="hover:text-cyan-300 flex items-center gap-1">
                {menu.label}
              </button>

              {/* SIMPLE DROPDOWN (Consulting, Training, Partners, Clients) */}
              {menu.items && openMenu === menu.id && (
                <div className="absolute left-0 mt-2 w-56 bg-slate-900 border border-slate-700 rounded-xl shadow-xl p-2 animate-fadeSlide"
                     onMouseEnter={() => setOpenMenu(menu.id)}
                     onMouseLeave={() => setOpenMenu(null)}>
                  {menu.items.map((itm) => (
                    <Link
                      key={itm.label}
                      to={itm.to}
                      onClick={() => setOpenMenu(null)}
                      className="block px-3 py-2 text-slate-300 hover:bg-slate-800 hover:text-white rounded-lg"
                    >
                      {itm.label}
                    </Link>
                  ))}
                </div>
              )}

              {/* ⭐ CLOUDTHAT-STYLE CERTIFICATION DROPDOWN (FINAL FIX) */}
              {menu.categories && openMenu === menu.id && (
                <div
                  className="absolute left-0 mt-2 w-72 max-h-96 overflow-y-auto 
                             bg-slate-900 border border-slate-700 rounded-xl shadow-lg 
                             py-2 z-50 animate-fadeSlide backdrop-blur-xl"
                  onMouseEnter={() => setOpenMenu(menu.id)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  {menu.categories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/certifications/${cat.id}`}
                      onClick={() => setOpenMenu(null)}
                      className="flex flex-col px-4 py-2 hover:bg-slate-800 transition rounded-lg"
                    >
                      <span className="text-sm font-semibold text-slate-100">
                        {cat.label}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        {cat.desc}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* BLOG LINK */}
          <Link to="/blog" className="hover:text-cyan-300">
            Blog / Resources
          </Link>
        </nav>

        {/* ⭐ MOBILE MENU */}
        {openMenu === "mobile" && (
          <div className="absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 px-4 py-4 md:hidden space-y-4 animate-fadeSlide">

            {menuItems.map((menu) => (
              <div key={menu.id}>
                <div
                  className="text-slate-200 font-medium py-2"
                  onClick={() => setOpenMenu(menu.id)}
                >
                  {menu.label}
                </div>

                {(openMenu === menu.id) && (
                  <div className="ml-4 space-y-2">

                    {/* Mobile simple items */}
                    {menu.items && menu.items.map((itm) => (
                      <Link
                        key={itm.label}
                        to={itm.to}
                        className="block text-slate-300 text-sm hover:text-cyan-400"
                        onClick={() => setOpenMenu(null)}
                      >
                        {itm.label}
                      </Link>
                    ))}

                    {/* Mobile certifications */}
                    {menu.categories && menu.categories.map((cat) => (
                      <Link
                        key={cat.id}
                        to={`/certifications/${cat.id}`}
                        className="block text-slate-300 text-sm hover:text-cyan-400"
                        onClick={() => setOpenMenu(null)}
                      >
                        {cat.label}
                      </Link>
                    ))}

                  </div>
                )}
              </div>
            ))}

          </div>
        )}

      </div>
    </header>
  );
}
