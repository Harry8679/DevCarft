export default function Formations() {
  const formations = ["React.js", "Node.js", "Symfony", "React Native"];

  return (
    <section>
      <h2 className="text-4xl font-bold mb-8">Formations</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {formations.map((f) => (
          <div key={f} className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
            <h3 className="text-2xl font-semibold">{f}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Formation pratique + projets réels.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}