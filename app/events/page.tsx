import Title from "../../components/layout/Title";
import EventCard from "../../components/Event/EventCard";
import { Evenment } from "../../typing";
import { ModifyEventButton } from "../../components/layout/ModifyEventButton";
import { AddEventButton } from "../../components/layout/AddEventButton";

const fetchEvent = async () => {
  const res = await fetch("http://amie.labinno-mtech.fr/api/evenement/getallevenements")
  const events: Evenment[] = await res.json();
  return events;
}

export default async function Events() {
    const events = await fetchEvent();
    return (
      <div className="">
        <Title>Évènements</Title>
        {/* <div className="mt-12 w-4/5 h-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 items-center">
          <h3 className="font-semibold self-center">Filtres</h3>
          <button className="btn btn-outline btn-primary">Catégories</button>
          <button className="btn btn-outline btn-primary">Date</button>
          <button className="btn btn-outline btn-primary">Lieu</button>
          <button className="btn btn-outline btn-primary">Participant</button>
        </div> */}
        <div>
          <AddEventButton />
        </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {events.map((event) => (
              <div key={event.idEvenement}>
                <EventCard event={event} />
              </div>
            ))}
          </div>
      </div>
    )
}
  