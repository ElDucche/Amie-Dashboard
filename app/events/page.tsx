import Title from "../../components/layout/Title";
import EventCard from "../../components/EventCard";
import { Event } from "../../typing";

const fetchEvent = async () => {
  const res = await fetch("https://mockend.com/ElDucche/Amie-Dashboard/events")
  const events: Event[] = await res.json();
  return events;
}

export default async function Events() {
    const events = await fetchEvent();
    console.log(events);
    return (
      <div className="w-full">
        <Title>Évènements</Title>
        <div className="mt-12 w-[36em] h-24 flex justify-between items-center">
          <h3 className="font-semibold">Filtres</h3>
          <button className="btn btn-outline btn-primary">Catégories ›</button>
          <button className="btn btn-outline btn-primary">Date</button>
          <button className="btn btn-outline btn-primary">Lieu</button>
          <button className="btn btn-outline btn-primary">Participant</button>
        </div>

        <div className="mt-4 mx-auto flex w-4/5 flex-wrap gap-4 justify-around">
          {events.map((event) => (
            <EventCard img={event.cover} name={event.title} date={event.createdAt} place={event.place} peoples={event.entrant} />
          ))}
        </div>
      </div>
    )
}
  