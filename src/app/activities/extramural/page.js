import Image from "next/image";

export default function ExtramuralPage() {
  return (
    <div className="px-10 py-10">

      <h1 className="text-3xl font-bold">Extramural</h1>
      <p className="text-gray-700 mt-2 max-w-4xl">
        Students are encouraged to participate in all Inter Collegiate competitions
        organized by Universities. Students are also encouraged to participate 
        in Inter University competitions. Specialized coaching is provided for 
        students who excel in sports.
      </p>

      <div className="w-20 h-[4px] bg-red-600 mt-3 mb-6"></div>

      {/* IMAGE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        <div className="w-full h-64 bg-gray-300 rounded-2xl border border-orange-300"></div>
        <div className="w-full h-64 bg-gray-300 rounded-2xl border border-orange-300"></div>
        <div className="w-full h-64 bg-gray-300 rounded-2xl border border-orange-300"></div>
        <div className="w-full h-64 bg-gray-300 rounded-2xl border border-orange-300"></div>

      </div>

    </div>
  );
}
