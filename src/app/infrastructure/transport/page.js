export default function TransportPage() {
  return (
    <div className="px-10 py-10">

      <h1 className="text-2xl font-bold">Transport</h1>
      <div className="w-20 h-[4px] bg-red-600 mt-2 mb-6"></div>

      <p className="text-gray-700 max-w-4xl mb-6">
       Transports facilities are available for daily communication between college and play grounds. The college also provides transport facilities as per special needs of all students whenever required
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="w-full h-64 bg-gray-300 rounded-2xl border border-orange-300"></div>
        <div className="w-full h-64 bg-gray-300 rounded-2xl border border-orange-300"></div>
      </div>

    </div>
  );
}
