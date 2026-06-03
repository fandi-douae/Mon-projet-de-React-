
function Hero() {
  return (
    <section className="relative mx-6 mt-4 rounded-3xl overflow-hidden shadow-xl h-[450px]">
      <img
        src="/logo/club.jpeg"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-blue-500/50"></div>
      <div className="relative z-10 flex items-center justify-between h-full px-8 md:px-13 ">
        <div className="max-w-xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold">
            Club Ibn Khaldoun
          </h1>
         <p className="mt-3 text-xl text-gray-300 font-medium">
            عقد من الإلهام والعطاء
          </p>
          <p className="mt-5 text-base md:text-lg text-gray-300">
            Dix ans à inspirer, innover et construire ensemble un avenir meilleur.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSejts8hkJ_44e62Q1nlWmxOKdGIycAURzar-QuzFSFgAW15UQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-xl transition"
            >Rejoindre le club</a>
          </div>
        </div>
        <div className="hidden md:flex">
          <img
            src="/logo/badge.png"
            alt="10 Ans"
            className="w-52 lg:w-90 object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;