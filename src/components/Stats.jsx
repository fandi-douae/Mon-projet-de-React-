import { Users, Trophy, CalendarDays, Handshake } from "lucide-react";
function Stats() {
  return (
    <section className="grid md:grid-cols-4 gap-6 px-6 mt-20">
      <div className="bg-blue-700 text-white p-8 rounded-2xl text-center">
        <Users size={40} className="mx-auto mb-4" />
        <h1 className="text-4xl font-bold">150+</h1>
        <p className="mt-2 text-2xl">Membres actifs</p>
      </div>
      <div className="bg-blue-700 text-white p-8 rounded-2xl text-center">
        <Trophy size={40} className="mx-auto mb-4" />
        <h1 className="text-4xl font-bold">50+</h1>
        <p className="mt-2 text-2xl">Événements réalisés</p>
      </div>
      <div className="bg-blue-700 text-white p-8 rounded-2xl text-center">
        <CalendarDays size={40} className="mx-auto mb-4" />
        <h1 className="text-4xl font-bold">10</h1>
        <p className="mt-2 text-2xl">Années d'existence</p>
      </div>
       <div className="bg-blue-700 text-white p-8 rounded-2xl text-center">
        <Handshake size={40} className="mx-auto mb-4" />
        <h1 className="text-4xl font-bold">∞</h1>
        <p className="mt-2 text-2xl">De services rendus</p>
      </div>
    </section>
  );
}
export default Stats;