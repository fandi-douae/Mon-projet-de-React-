function JoinFrom() {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-2xl">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">
        Formulaire d'inscription
      </h2>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Nom complet"
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="tel"
          placeholder="Téléphone"
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          placeholder="Université"
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          placeholder="Filière"
          className="w-full border p-3 rounded-lg"
        />

        <select className="w-full border p-3 rounded-lg">
          <option>Choisir votre semestre</option>
          <option>S1</option>
          <option>S2</option>
          <option>S3</option>
          <option>S4</option>
          <option>S5</option>
          <option>S6</option>
          <option>Master S1</option>
          <option>Master S2</option>
          <option>Master S3</option>
          <option>Master S4</option>
        </select>

        <textarea
          placeholder="Pourquoi voulez-vous rejoindre le club ?"
          rows="5"
          className="w-full border p-3 rounded-lg"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
        >
          S'inscrire
        </button>
      </form>
    </div>
  );
}

export default JoinFrom;