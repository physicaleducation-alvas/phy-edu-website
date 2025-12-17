export default function MultipurposeHallPage() {
  return (
    <div className="px-10 py-10">

      <h1 className="text-2xl font-bold">Multipurpose Hall</h1>
      <div className="w-20 h-[4px] bg-red-600 mt-2 mb-6"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="w-full h-64 bg-gray-300 rounded-2xl border border-orange-300"></div>
        <div className="w-full h-64 bg-gray-300 rounded-2xl border border-orange-300"></div>
      </div>

    </div>
  );
}
