export default function TrekkingProgrammePage() {
  return (
    <div className="px-10 py-10">

      <h1 className="text-3xl font-bold">Trekking Programme</h1>

      <p className="text-gray-700 mt-2 max-w-4xl">
        Annual Trekking camps and camping activities are organized for our 
        students with an effort to encourage and develop the leadership 
        qualities. Camp fires and long trekking are conducted along with 
        cultural competitions for the students.
      </p>

      <div className="w-20 h-[4px] bg-red-600 mt-3 mb-6"></div>

      {/* IMAGE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        <div className="w-full h-64 bg-gray-300 rounded-2xl border border-orange-300"></div>

        <div className="w-full h-64 bg-gray-300 rounded-2xl border border-orange-300"></div>

      </div>

    </div>
  );
}
