import Title from "../../components/layout/Title";
import Event from "../../components/Event";

export default function Events() {
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

        <div className="mt-4 mx-auto flex w-[56em] flex-wrap gap-4 justify-around">
          <Event img="https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" name="Event Test" date="18 novembre 2023" place="Paris" peoples={1}/>
          <Event img="https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" name="Event Test" date="18 novembre 2023" place="Tours" peoples={12}/>
          <Event img="https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" name="Event Test" date="18 novembre 2023" place="En ligne" peoples={160}/>
          <Event img="https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" name="Event Test" date="18 novembre 2023" place="Tours" peoples={0}/>
          <Event img="https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" name="Event Test" date="18 novembre 2023" place="En ligne" peoples={9}/>
          <Event img="https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" name="Event Test" date="18 novembre 2023" place="Nancy" peoples={36}/>
          <Event img="https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" name="Event Test" date="18 novembre 2023" place="Paris" peoples={1}/>
        </div>
      </div>
    )
}
  