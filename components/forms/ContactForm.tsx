"use client";

import { useRef, useState } from "react";
import { sendEmail } from "@/lib/email/emailjs";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formRef.current) return;

    sendEmail(formRef.current)
      .then(() => {
        setStatus("success");
        formRef.current?.reset();
      })
      .catch(() => setStatus("error"));
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
    >
      <input
        name="name"
        placeholder="Votre nom"
        className="p-3 border rounded-xl dark:bg-gray-700"
        required
      />
      <input
        name="email"
        placeholder="Votre email"
        type="email"
        className="p-3 border rounded-xl dark:bg-gray-700"
        required
      />
      <textarea
        name="message"
        placeholder="Votre message"
        rows={5}
        className="p-3 border rounded-xl dark:bg-gray-700"
        required
      />

      <button
        className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
      >
        Envoyer
      </button>

      {status === "success" && (
        <p className="text-green-500">Message envoyé !</p>
      )}
      {status === "error" && (
        <p className="text-red-500">Erreur lors de l&apos;envoi.</p>
      )}
    </form>
  );
}
