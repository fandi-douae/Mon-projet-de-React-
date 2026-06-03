import { useParams } from "react-router-dom";
import { events } from "../data/events";
function EventDetails() {
  const { id } = useParams();
  const event = events[id];
  if (!event) {
    return <h2 className="text-center mt-20">Event not found</h2>;
  }
  return (
    <div className="p-10 max-w-3xl mx-auto">
      <img src={event.image} className="rounded-xl w-full w-52 lg:w-90 mx-auto" />
      <p className="mt-4 text-gray-600">
        {event.desc}
      </p>
      <div className="mt-6 bg-gray-100 p-5 rounded-xl">
        <h1 className="text-2xl font-bold">
          {event.script.titrescript}
        </h1>
        <div>
        <p className="mt-4 text-gray-600">
          {event.script.intro}
          <h2 className="text-black font-semibold mt-6">Objectifs</h2>
          <ul className="list-disc pl-5 ml-6">
            {event.script.objectifs.map((objectif, index) => (
              <li key={index} className="mt-2">
                {objectif}
              </li>
            ))}
          </ul>
          <h2 className="text-black font-semibold mt-6">Déroulement</h2>
          <ul className="list-disc pl-5 ml-6">
            {event.script.déroulement.map((step, index) => (
              <li key={index} className="mt-2">
                {step}
              </li>
            ))}
          </ul>
          <h2 className="text-black font-semibold mt-6">Remerciements</h2>
          <p className="mt-2">{event.script.remerciements}</p>
        </p>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;