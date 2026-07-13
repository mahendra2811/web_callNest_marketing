"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "textarea";
  placeholder?: string;
  required?: boolean;
};

export function MailForm({
  to,
  subject,
  fields,
  intro,
}: {
  to: string;
  subject: string;
  fields: Field[];
  intro?: string;
}) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);

  function buildBody() {
    return fields
      .map((f) => `${f.label}:\n${values[f.name] ?? ""}`)
      .join("\n\n");
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = buildBody();
    const url = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  }

  async function copyAll() {
    const body = `To: ${to}\nSubject: ${subject}\n\n${buildBody()}`;
    try {
      await navigator.clipboard.writeText(body);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-4">
      {intro && <p className="text-sm text-ink-600">{intro}</p>}
      {fields.map((f) => (
        <label key={f.name} className="block">
          <span className="text-sm font-medium">
            {f.label}
            {f.required ? " *" : ""}
          </span>
          {f.type === "textarea" ? (
            <textarea
              required={f.required}
              placeholder={f.placeholder}
              rows={5}
              value={values[f.name] ?? ""}
              onChange={(e) =>
                setValues((v) => ({ ...v, [f.name]: e.target.value }))
              }
              className="mt-1 block w-full rounded-2xl border border-ink-600/20 bg-surface-0 px-4 py-3 text-sm shadow-neu dark:shadow-neu-dark focus:border-brand-500 focus:outline-none"
            />
          ) : (
            <input
              type={f.type ?? "text"}
              required={f.required}
              placeholder={f.placeholder}
              value={values[f.name] ?? ""}
              onChange={(e) =>
                setValues((v) => ({ ...v, [f.name]: e.target.value }))
              }
              className="mt-1 block w-full rounded-2xl border border-ink-600/20 bg-surface-0 px-4 py-3 text-sm shadow-neu dark:shadow-neu-dark focus:border-brand-500 focus:outline-none"
            />
          )}
        </label>
      ))}
      <div className="flex flex-wrap gap-3">
        <Button type="submit">Send via email</Button>
        <Button type="button" variant="secondary" onClick={copyAll}>
          {copied ? "Copied!" : "Copy to clipboard"}
        </Button>
      </div>
      <p className="text-xs text-ink-600">
        We do not store anything. Submitting opens your email app addressed to{" "}
        <span className="font-mono">{to}</span>.
      </p>
    </form>
  );
}
