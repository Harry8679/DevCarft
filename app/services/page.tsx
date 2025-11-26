export default function Services() {
  const services = [
    "Applications Web (React, Next.js)",
    "Applications Mobiles (React Native)",
    "APIs & Backend (Node.js, Symfony)",
    "Intégration UI/UX moderne",
    "Dashboards internes",
    "Sites vitrines professionnels",
  ];

  return (
    <section>
      <h2 className="text-4xl font-bold mb-8">Services</h2>
      <ul className="grid md:grid-cols-2 gap-6">
        {services.map((s) => (
          <li key={s} className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
            {s}
          </li>
        ))}
      </ul>
    </section>
  );
}