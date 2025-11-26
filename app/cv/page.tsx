"use client";

import { DownloadCVButton } from "@/components/ui/DownloadCVButton";

export default function CV() {
  return (
    <section>
      <h2 className="text-4xl font-bold mb-8">Mon CV</h2>

      <div id="cv-content" className="p-6 bg-white dark:bg-gray-800 shadow rounded-xl">
        <h3 className="text-2xl font-semibold">Nom Prénom</h3>
        <p>Développeur Fullstack (React, Node.js, TS)</p>

        <h4 className="mt-6 text-xl font-bold">Compétences</h4>
        <ul className="list-disc list-inside">
          <li>React, Next.js, React Native</li>
          <li>Node.js, Express, Symfony</li>
          <li>TypeScript, TailwindCSS</li>
          <li>MongoDB, PostgreSQL</li>
        </ul>
      </div>

      <div className="mt-6">
        <DownloadCVButton />
      </div>
    </section>
  );
}