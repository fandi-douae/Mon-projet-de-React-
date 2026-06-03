import React from "react";

function About() {
  return (
    <section className="px-6 mt-20 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">À propos du Club Ibn Khaldoun</h1>
      
      <p className="text-gray-700 mb-6">
        Fondé par <strong>Madame Ilham Zerdani</strong> en 2015, le 
        <strong> Club Ibn Khaldoun</strong> de l’Université Hassan II de Casablanca 
        est un espace <span className="text-blue-700 font-semibold">dynamique et engagé</span> 
        où les étudiants participent activement à des actions sociales et culturelles.
      </p>

      <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-3">Notre vision</h2>
      <p className="text-gray-700 mb-6">
        Faire du club un lieu de solidarité et de responsabilité citoyenne, 
        contribuant positivement au changement de la société.
      </p>

      <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-3">Nos objectifs</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Impact social et activités culturelles</li>
        <li>Développement des compétences pratiques</li>
        <li>Encourager l’engagement étudiant</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-3">Réalisations</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>7 caravanes médicales scolaires</li>
        <li>Distribution de paniers de ftour</li>
        <li>Ksswat l’Aïd (habits pour l’Aïd)</li>
        <li>Ma2idat Rahman (repas solidaires)</li>
        <li>Actions dans les orphelinats</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-3">Événements à venir</h2>
      <p className="text-gray-700 mb-6">
        Organisation de nouvelles caravanes médicales pour élargir l’impact 
        et atteindre un maximum de bénéficiaires.
      </p>

      <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-3">Avantages pour les membres</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Certificats de participation</li>
        <li>Expérience pratique</li>
        <li>Engagement citoyen valorisé</li>
      </ul>
    </section>
  );
}

export default About;