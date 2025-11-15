import React, { useState } from "react";

export default function EnrollmentForm({ defaultCourse }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: defaultCourse || "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: integrate with Gmail + Google Sheets
    console.log("Enrollment form submitted:", form);
    alert("Enrollment form submitted! (Backend integration will be added later.)");
    setForm((prev) => ({ ...prev, message: "" }));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 grid gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 md:p-6"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none focus:border-cyan-400"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none focus:border-cyan-400"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1">
            Phone / WhatsApp
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none focus:border-cyan-400"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1">
            Certification / Course
          </label>
          <input
            type="text"
            name="course"
            required
            value={form.course}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none focus:border-cyan-400"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-300 mb-1">
          Notes (Experience, Goals, Preferred Schedule)
        </label>
        <textarea
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none focus:border-cyan-400"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-400 active:bg-cyan-300"
      >
        Submit Enrollment
      </button>
    </form>
  );
}
