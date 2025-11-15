import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const categories = {
  microsoft: {
    name: "Microsoft",
    certifications: [
      { id: "az-104", title: "Azure Administrator (AZ-104)" },
      { id: "az-204", title: "Azure Developer (AZ-204)" },
      { id: "az-305", title: "Azure Solutions Architect (AZ-305)" },
      { id: "az-400", title: "Azure DevOps Expert (AZ-400)" },
      { id: "ai-102", title: "Azure AI Engineer (AI-102)" }
    ]
  },
  oracle: {
    name: "Oracle",
    certifications: [
      { id: "oracle-ocp", title: "Oracle Certified Professional (OCP)" },
      { id: "oracle-adb", title: "Oracle Autonomous DB Specialist" }
    ]
  },
  devops: {
    name: "DevOps",
    certifications: [
      { id: "cka", title: "Kubernetes Administrator (CKA)" },
      { id: "devops-pro", title: "DevOps Engineer Professional" }
    ]
  },
  pmp: {
    name: "Project Management",
    certifications: [
      { id: "pmp", title: "PMP – Project Management Professional" },
      { id: "capm", title: "CAPM – Associate Project Manager" }
    ]
  },
  security: {
    name: "Security",
    certifications: [
      { id: "az-500", title: "Azure Security Engineer (AZ-500)" },
      { id: "sc-100", title: "Cybersecurity Architect (SC-100)" }
    ]
  },
  cloud: {
    name: "Cloud",
    certifications: [
      { id: "aws-sa", title: "AWS Solutions Architect Associate" },
      { id: "gcp-ace", title: "GCP Associate Cloud Engineer" }
    ]
  },
  aidata: {
    name: "AI & Data",
    certifications: [
      { id: "ai-engineer", title: "AI Engineer Certification" },
      { id: "data-engineer", title: "Data Engineer Certification" }
    ]
  }
};

export default function Certifications() {
  const { id } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(id || null);

  useEffect(() => {
    setSelectedCategory(id);
  }, [id]);

  return (
    <div className="section-container max-w-5xl">

      <h1 className="text-3xl font-semibold mb-6">Certifications</h1>

      {selectedCategory ? (
        <>
          <h2 className="text-xl font-semibold mb-4">
            {categories[selectedCategory].name} Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {categories[selectedCategory].certifications.map((cert) => (
              <Link
                key={cert.id}
                to={`/certifications/${cert.id}`}
                className="block p-4 border border-slate-800 rounded-xl bg-slate-900 hover:border-cyan-400 hover:bg-slate-800 transition"
              >
                <h3 className="text-slate-100 text-sm font-medium">{cert.title}</h3>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <p className="text-slate-400 text-sm">
          Select a category from the Certifications menu.
        </p>
      )}

    </div>
  );
}
