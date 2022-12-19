import React from 'react'
import EventCard from '../Components/EventCard'

const Event = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 pt-10 mx-auto">
      <h2 className='font-bold text-lg mb-3'>Upcoming Events</h2>
        <div className="flex flex-wrap -m-4">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </section>
  );
}

export default Event