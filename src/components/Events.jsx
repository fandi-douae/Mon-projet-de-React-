import { Link } from "react-router-dom";
import { events } from "../data/events";
import { useState } from "react";

function Events() {
  const itemsPerPage = 8; // 4 cards x 2 lines
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(events.length / itemsPerPage);
  const start = page * itemsPerPage;
  const visibleEvents = events.slice(start, start + itemsPerPage);
  const nextPage = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };
  const prevPage = () => {
    if (page > 0) setPage(page - 1);
  };
  return (
    <section id="events" className="px-6 mt-20">
      <h2 className="text-3xl font-bold mb-8">Nos événements</h2>
      <div className="relative">
        {page > 0 && (
          <button
            onClick={prevPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10
            w-12 h-12 rounded-full bg-white/30 backdrop-blur-md
            hover:bg-white/50 transition flex items-center justify-center
            text-2xl font-bold"
          >
            ❮
          </button>
        )}
        {page < totalPages - 1 && (
          <button
            onClick={nextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10
            w-12 h-12 rounded-full bg-white/30 backdrop-blur-md
            hover:bg-white/50 transition flex items-center justify-center
            text-2xl font-bold"
          >
            ❯
          </button>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-10">
          {visibleEvents.map((event, index) => (
            <Link
              key={index}
              to={`/event/${start + index}`}
              className="block"
            >
              <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition duration-300">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-48 w-full object-cover"
                />

                <div className="p-4">
                  <h3 className="font-bold">{event.title}</h3>
                  <p className="text-sm text-gray-600">
                    {event.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;