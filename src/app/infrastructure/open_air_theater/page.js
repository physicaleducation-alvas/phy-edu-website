export default function OpenAirTheaterPage() {
  return (
    <div className="px-10 py-10">

      <h1 className="text-2xl font-bold">Open Air Theatre</h1>
      <p className="text-gray-700 mt-2 max-w-4xl">
        Alva’s Education Foundation has an open air theatre seating capacity of about 25000 people. these facilities are also made use by the students of Alva’s College of Physical Education. The annual national level cultural fest called has Alva’s Virasath, The Independence Day Celebration and The Republic Day celebration are celebrated in this open-air theatre.
      </p>
      <div className="w-20 h-[4px] bg-red-600 mt-2 mb-6"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="w-full h-64 bg-gray-300 rounded-2xl border border-orange-300"></div>
        <div className="w-full h-64 bg-gray-300 rounded-2xl border border-orange-300"></div>
      </div>

    </div>
  );
}
