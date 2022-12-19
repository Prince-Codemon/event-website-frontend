import React from "react";

const CreateEvent = () => {
  return (
    <div className="w-full flex items-center justify-center bg-cyan-400 h-screen
     py-5">
      <form className="w-[500px]  bg-white rounded-md shadow-md flex flex-col gap-3 p-5">
        <div className="text-2xl font-semibold">Create Event</div>
        <div className="flex flex-col gap-2">
          <div className="text-sm font-semibold">Event Name</div>
          <input type="text" className="w-full rounded-md shadow-sm p-2 border border-gray-600" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-sm font-semibold">Event Date</div>
          <input type="date" className="w-full rounded-md shadow-sm p-2 " />
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-sm font-semibold">Event Description</div>
          <textarea type="text" className="w-full rounded-md shadow-sm p-2" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-sm font-semibold">Event Tags</div>
          <input type="text" className="w-full rounded-md shadow-sm p-2" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-sm font-semibold">Event Image</div>
          <input type="file" className="w-full rounded-md shadow-sm p-2" />
        </div>
        
      </form>
    </div>
  );
};

export default CreateEvent;
