export default function ClassRoomPage() {
  return (
    <div className="px-10 py-10">

      <h1 className="text-2xl font-bold">Class Room</h1>
      <div className="w-20 h-[4px] bg-red-600 mt-2 mb-6"></div>

      <h2 className="font-semibold">BPEd</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-4 mb-8">
        <div className="w-full h-64 bg-gray-300 rounded-2xl border border-orange-300"></div>
        <div className="w-full h-64 bg-gray-300 rounded-2xl border border-orange-300"></div>
      </div>

      <h2 className="font-semibold">MPEd</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-4">
        <div className="w-full h-64 bg-gray-300 rounded-2xl border border-orange-300"></div>
        <div className="w-full h-64 bg-gray-300 rounded-2xl border border-orange-300"></div>
      </div>

    </div>
  );
}
