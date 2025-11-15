import React from "react";
import { Link } from "react-router-dom";

const posts = [
  {
    slug: "getting-started-with-cloud-ai",
    title: "Getting Started with Cloud + AI for Working Professionals",
    category: "Cloud & AI",
    readingTime: "6 min read",
  },
  {
    slug: "azure-certification-roadmap",
    title: "Azure Certification Roadmap for 2025 (Engineer to Architect)",
    category: "Certifications",
    readingTime: "8 min read",
  },
  {
    slug: "devops-for-data-and-ai",
    title: "DevOps for Data & AI Projects – What Changes?",
    category: "DevOps",
    readingTime: "7 min read",
  },
];

export default function Blog() {
  return (
    <div className="section-container">
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-50 mb-3">
        Blog & Resources
      </h2>
      <p className="text-sm text-slate-300 max-w-2xl mb-6">
        Use this space for blogs, guides, cheat‑sheets, and free resources. All
        current entries are placeholders — you can edit titles, URLs, and
        content later.
      </p>

      <div className="grid gap-4 md:grid-cols-3 text-sm">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
          >
            <p className="text-[11px] text-cyan-300 mb-1">{post.category}</p>
            <h3 className="font-semibold text-slate-50 mb-1">{post.title}</h3>
            <p className="text-[11px] text-slate-400 mb-3">{post.readingTime}</p>
            <Link
              to={`/blog/${post.slug}`}
              className="text-xs text-cyan-300 hover:text-cyan-200"
            >
              Read article →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
