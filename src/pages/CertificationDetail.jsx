import React from "react";
import { useParams } from "react-router-dom";
import { certificationDetails } from "../data/certificationDetails";
import EnrollmentForm from "../components/EnrollmentForm";

export default function CertificationDetail() {
  const { id } = useParams();
  const details = certificationDetails[id];

  if (!details) {
    return (
      <div className="section-container">
        <h2 className="text-xl font-semibold text-slate-50 mb-2">
          Certification not found
        </h2>
        <p className="text-sm text-slate-300">
          The certification you are looking for does not exist yet. You can add
          it inside <code>src/data/certificationDetails.js</code>.
        </p>
      </div>
    );
  }

  return (
    <div className="section-container max-w-4xl">
      <p className="text-[11px] text-cyan-300 mb-2">
        Certifications / {details.category}
      </p>

      <h1 className="text-2xl md:text-3xl font-semibold text-slate-50 mb-2">
        {details.title}
      </h1>

      <p className="text-sm text-slate-300 mb-4">{details.summary}</p>

      {/* Badges */}
      <div className="flex flex-wrap gap-3 text-[11px] text-slate-200 mb-4">
        <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1">
          Level: {details.level}
        </span>
        <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1">
          Duration: {details.duration}
        </span>
        <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1">
          Mode: {details.mode}
        </span>
      </div>

      {/* What you will learn */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 mb-4">
        <h2 className="text-sm font-semibold text-slate-50 mb-2">
          Key Learning Highlights
        </h2>
        <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
          {details.highlights?.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>

      {/* Syllabus */}
      <div className="flex flex-wrap gap-3 mb-2">
        <a
          href={details.syllabusPath}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-cyan-300 border border-cyan-500/40 hover:bg-slate-800"
        >
          Download Syllabus (PDF)
        </a>
      </div>

      <p className="text-xs text-slate-400 mb-4">
        Note: Syllabus PDFs are placeholders. Replace with your actual syllabus
        files inside <code>public/syllabus</code>.
      </p>

      {/* Enrollment Form */}
      <h2 className="text-sm font-semibold text-slate-50 mt-6">
        Enrollment Form
      </h2>

      <EnrollmentForm defaultCourse={details.title} />
    </div>
  );
}
