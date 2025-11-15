import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-10">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-slate-400">
        <p>© {new Date().getFullYear()} Cloud AI Solution. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="/privacy" className="hover:text-cyan-300">
            Privacy
          </Link>
          <Link to="/terms" className="hover:text-cyan-300">
            Terms
          </Link>
          <a href="mailto:info@cloudaisolution.com" className="hover:text-cyan-300">
            info@cloudaisolution.com
          </a>
        </div>
      </div>
    </footer>
  );
}
