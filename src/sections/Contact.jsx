import { useState } from "react";
import SectionContainer from "../components/SectionContainer";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:youremail@example.com?subject=${encodeURIComponent(
      `Portfolio contact from ${form.name || "Visitor"}`
    )}&body=${encodeURIComponent(form.message || "")}`;
    window.location.href = mailto;
  };

  return (
    <SectionContainer
      id="contact"
      eyebrow="Contact"
      title="Let’s work together."
      tone="default"
    >
      <div className="grid gap-10 md:grid-cols-[1.2fr,0.8fr]">
        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-xs font-semibold uppercase tracking-wide text-neutral-700"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm md:text-base text-neutral-900 outline-none transition-all focus:border-neutral-900 focus:shadow-[0_0_0_1px_rgba(23,23,23,0.9)]"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-xs font-semibold uppercase tracking-wide text-neutral-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm md:text-base text-neutral-900 outline-none transition-all focus:border-neutral-900 focus:shadow-[0_0_0_1px_rgba(23,23,23,0.9)]"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-xs font-semibold uppercase tracking-wide text-neutral-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me a bit about your project or idea..."
              className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm md:text-base text-neutral-900 outline-none transition-all focus:border-neutral-900 focus:shadow-[0_0_0_1px_rgba(23,23,23,0.9)]"
            />
          </div>

          <button
            type="submit"
            className="mt-2 rounded-full bg-neutral-900 px-8 py-3 text-sm md:text-base font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Send message
          </button>
        </form>

        {/* INFO SAMPING */}
        <div className="space-y-5 text-sm md:text-base text-neutral-700">
          <p>
            Whether you’re looking for a developer, a collaborator, or just want
            to say hi — feel free to reach out. I’ll get back to you as soon as
            I can.
          </p>

          <div className="space-y-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                Email
              </p>
              <a
                href="mailto:youremail@example.com"
                className="text-neutral-900 underline-offset-4 hover:underline"
              >
                youremail@example.com
              </a>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                Links
              </p>
              <div className="mt-2 flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-900 underline-offset-4 hover:underline"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-900 underline-offset-4 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
