import React from "react";
import { useParams, Link } from "react-router-dom";

export default function BlogPost() {
  const { slug } = useParams();

  return (
    <div className="section-container max-w-3xl">
      <p className="text-[11px] text-cyan-300 mb-2">Blog / Resource</p>
      <h1 className="text-2xl md:text-3xl font-semibold text-slate-50 mb-3">
        Placeholder blog post: {slug}
      </h1>
      <p className="text-sm text-slate-300 mb-4">
        This is a placeholder article page. When you are ready, you can replace
        this text with real blog content for: <code>{slug}</code>.
      </p>
      <p className="text-sm text-slate-300 mb-4">
        The idea is to mirror the structure of a professional training /
        consulting website: short articles, certification guidance, and Cloud /
        AI study paths. You can also embed videos, diagrams, and code snippets
        here later.
      </p>
      <Link to="/blog" className="text-xs text-cyan-300 hover:text-cyan-200">
        ← Back to Blog & Resources
      </Link>
    </div>
  );
}
